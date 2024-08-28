// pages/api/sendThankYouEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name } = req.body;

    // Configure the transporter for sending the email
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
      }
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Signing Up!",
      text: `Hi ${name},\n\nThank you for signing up for our service! We're excited to have you on board.\n\nBest regards,\nYour Company Name`
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Thank you email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
