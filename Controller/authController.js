const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendWelcomeMail } = require("../utiles/sendEmail.js");
const { generateWelcomeEmailHtml } = require("../mailTemplet/welcomeMail.js");
const {
  registerSchema,
  loginSchema,
} = require("../Validation/uservalidation.js");
const { z } = require("zod");
const { formatZodError } = require("../utiles/zoderror.js");




const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const {
      email,
      username,
      password,
      firstName,
      confirmPassword,
      lastName,
      role,
    } = validatedData;

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
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const validatedData = loginSchema.parse(req.body);

  const { username, password } = validatedData;

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
    if (error instanceof z.ZodError) {
      const formattedErrors = formatZodError(error.errors);
      return res.status(400).json({ errors: formattedErrors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { register, login };
