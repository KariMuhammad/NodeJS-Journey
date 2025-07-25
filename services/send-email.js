const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kimoomar007@gmail.com",
    pass: config.google_app_password,
  },
});

const mailOptions = {
  from: "noreply@gmail.com",
  to: "recipient@example.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent using Nodemailer.",
};

module.exports = { transporter };
