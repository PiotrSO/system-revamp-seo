const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(express.json());

// POST /api/send-email
app.post("/api/send-email", async (req, res) => {
  try {
    const { firstName, lastName, companyName, phone, email, consent } = req.body;

    if (!consent) {
      return res.status(400).json({ message: "Zgoda wymagana" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // opcjonalna weryfikacja połączenia (można zakomentować w produkcji)
    // await transporter.verify();

    const mailOptions = {
      from: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `Nowe zapytanie: ${firstName} ${lastName}`,
      text: `Imię: ${firstName}\nNazwisko: ${lastName}\nFirma: ${companyName}\nTelefon: ${phone}\nEmail: ${email}`,
      html: `<p>Imię: ${firstName}</p><p>Nazwisko: ${lastName}</p><p>Firma: ${companyName}</p><p>Telefon: ${phone}</p><p>Email: ${email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ message: "Błąd serwera" });
  }
});

// serwowanie statycznego buildu (dist w katalogu głównym projektu)
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

// fallback do index.html dla SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});