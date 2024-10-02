const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Schema for storing contact form submissions
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Set up Nodemailer transporter using Gmail and environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route for handling contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please fill in all fields.' });
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Please enter a valid email address.' });
  }

  try {
    // Save the contact form data to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification to the admin (you)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Your personal email
      subject: 'New Contact Form Submission',
      text: `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error sending email.' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ msg: 'Message sent successfully!' });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error. Please try again later.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
