const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
// wczytaj .env niezależnie od cwd
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());
app.use(cors()); // w dev dopuszczamy wszystkie originy; w produkcji ogranicz

// pokaż podstawowe ustawienia (nie logujemy hasła)
console.log("SMTP config:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  user: process.env.SMTP_USER,
});

// transporter SMTP z env (timeouty ułatwiają debug)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
});

// verify transporter on startup — jeśli błąd, zaloguj szczegóły
transporter.verify()
  .then(() => console.log("SMTP transporter verified"))
  .catch((err) => {
    console.error("SMTP transporter verification failed:", err && err.message);
    console.error(err && err.stack);
  });

// healthcheck
app.get("/health", (req, res) => res.json({ ok: true }));

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
      from: `"System Serwis" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.TO_EMAIL || "biuro@system-serwis.eu",
      replyTo: email,
      subject: "Zapytanie o wycenę",
      text,
      html: `<pre>${text}</pre>`,
    });

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    // log pełny błąd w konsoli (usuń szczegóły w produkcji)
    console.error("send-email error:", err && err.message);
    console.error(err && err.stack);
    // w dev zwracamy message dla szybkiego debugu
    const devError = process.env.NODE_ENV !== "production" ? (err && err.message) : undefined;
    return res.status(500).json({ ok: false, message: "Błąd serwera", error: devError });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Email server running on ${PORT}`));