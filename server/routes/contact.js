import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// ── Validation rules ────────────────────────────────────
const validate = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),
  body('email')
    .isEmail().withMessage('Valid email required')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 2000 }).withMessage('Message too long'),
];

// ── POST /api/contact ───────────────────────────────────
router.post('/', validate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({ name, email, message });

    // Optional Gmail notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `📬 Portfolio contact from ${name}`,
        html: `
          <h2>New contact from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });
    }

    return res.status(201).json({
      message: 'Message sent successfully!',
      id: contact._id,
    });
  } catch (err) {
    console.error('Contact POST error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

export default router;