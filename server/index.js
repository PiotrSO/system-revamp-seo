const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
// wczytaj .env: najpierw server/.env, potem root .env
const envCandidates = [
  path.join(__dirname, ".env"),
  path.join(__dirname, "..", ".env"),
];
const envPath = envCandidates.find((p) => fs.existsSync(p));
if (envPath) {
  require("dotenv").config({ path: envPath });
  console.log("Loaded .env from", envPath);
} else {
  console.warn("No .env found in server/ or repo root");
}

const app = express();
app.use(express.json());

// w produkcji ogranicz origin przez ustawienie CORS_ORIGIN, w dev domyślnie '*'
const corsOrigin = process.env.CORS_ORIGIN || "*";
app.use(cors({ origin: corsOrigin }));

// jeśli serwujemy frontend z dist (production), skonfiguruj static — ale tylko jeśli dist istnieje
const frontendDist = path.join(__dirname, "..", "dist");
const wantServeFrontend = process.env.SERVE_FRONTEND === "true" || process.env.NODE_ENV === "production";
const frontendExists = fs.existsSync(frontendDist);
const serveFrontend = wantServeFrontend && frontendExists;
if (wantServeFrontend && !frontendExists) {
  console.warn("SERVE_FRONTEND was requested but dist folder not found at:", frontendDist);
}
if (serveFrontend) {
  app.use(express.static(frontendDist));
}

// podstawowe sprawdzenie konfiguracji (nie logujemy haseł)
console.log("SMTP config:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  user: process.env.SMTP_USER,
  serveFrontend,
});

// transporter SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // opcjonalne ustawienia TLS przy niestandardowych certyfikatach
  tls: {
    rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== "false",
  },
  connectionTimeout: Number(process.env.SMTP_CONNECTION_TIMEOUT) || 10000,
  greetingTimeout: Number(process.env.SMTP_GREETING_TIMEOUT) || 10000,
});

// verify transporter on startup
transporter.verify()
  .then(() => console.log("SMTP transporter verified"))
  .catch((err) => {
    console.error("SMTP transporter verification failed:", err && err.message);
    console.error(err && err.stack);
  });

// healthcheck
app.get("/health", (req, res) => res.json({ ok: true }));

// API: wysyłka wiadomości
app.post("/api/send-email", async (req, res) => {
  try {
    const { firstName, lastName, companyName, phone, email } = req.body || {};

    if (!firstName || !lastName || !phone || !email) {
      return res.status(400).json({ ok: false, message: "Brak wymaganych pól" });
    }

    const text = `Zapytanie o wycenę

Imię: ${firstName}
Nazwisko: ${lastName}
Nazwa firmy: ${companyName || "-"}
Telefon: ${phone}
E-mail: ${email}
`;

    const info = await transporter.sendMail({
      from: `"System Serwis" <${process.env.CONTACT_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: "Zapytanie o wycenę",
      text,
      html: `<pre>${text}</pre>`,
    });

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("send-email error:", err && err.message);
    // Nie ujawniamy szczegółów błędu klientowi w produkcji
    const devError = process.env.NODE_ENV !== "production" ? (err && err.message) : undefined;
    return res.status(500).json({ ok: false, message: "Błąd serwera", error: devError });
  }
});

// jeśli serwujemy frontend, obsłuż pozostałe ścieżki zwracając index.html
if (serveFrontend) {
  app.get("/*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Email server running on ${PORT}`));