image.pngz// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

// autorise ton front (Vite: http://localhost:5173)
app.use(cors({ origin: ["http://localhost:5173"], methods: ["POST"] }));
app.use(express.json());

// anti-spam simple
app.use("/api/", rateLimit({ windowMs: 60 * 1000, max: 10 }));

// Transport SMTP (Gmail avec mot de passe d’application OU n’importe quel SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,            // ex: "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT),    // ex: 465
  secure: process.env.SMTP_SECURE !== "false", // true si 465
  auth: {
    user: process.env.SMTP_USER,          // ex: "ton.email@gmail.com"
    pass: process.env.SMTP_PASS,          // mot de passe d'application
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "MISSING_FIELDS" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || "pierrechahine2@gmail.com",
      subject: `Portfolio contact — ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("MAIL_SEND_FAILED:", err);
    res.status(500).json({ ok: false, error: "MAIL_SEND_FAILED" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));