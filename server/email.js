const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (clientEmail) => {
  try {
    const mailTemplate = {
      from: process.env.EMAIL_USER,
      to: clientEmail,
      subject: "Early Access Offer",
      text: "Thank you for your interest in our early access offer. You will be the first to know when we launch.",
    };

    await transporter.sendMail(mailTemplate);
    console.log(`Sent email to: ${clientEmail}`);
  } catch (err) {
    console.log(`Error sending email to ${clientEmail}:`, err);
  }
};

module.exports = {
  sendEmail,
};
