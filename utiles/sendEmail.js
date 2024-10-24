const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

const sendWelcomeMail = async (to, text, htmlContent) => {
  const mailOptions = {
    from: "test123@gmail.com",
    to: to,
    subject: "Welcome to Our Platform!",
    text: text,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendWelcomeMail };
