const { z } = require("zod");

const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    username: z
      .string()
      .trim()
      .min(3, { message: "Username must be at least 3 characters long" }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must be at least 6 characters long" }),

    confirmPassword: z.string().trim().min(6, {
      message: "Confirm Password must be at least 6 characters long",
    }),
    firstName: z.string().trim().min(1, { message: "First Name is required" }),
    lastName: z.string().trim().min(1, { message: "Last Name is required" }),
    role: z.enum(["user", "admin"]).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

module.exports = { registerSchema, loginSchema };
