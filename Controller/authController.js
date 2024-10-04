const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendWelcomeMail } = require("../utiles/sendEmail.js");
const { generateWelcomeEmailHtml } = require("../mailTemplet/welcomeMail.js");

//Register
const register = async (req, res) => {
  const {
    email,
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
    role,
  } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match" });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
      role,
    });
    const text = `Hello ${req.body.name},\n\nThank you for registering with us. We are excited to have you on board!`;
    const htmlContent = generateWelcomeEmailHtml(req.body.firstName);
    console.log(`==================================${newUser}`);
    if (newUser) {
      await sendWelcomeMail(req.body.email, text, htmlContent);
    }
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.errors[0].message });
  }
};

//login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { register, login };
