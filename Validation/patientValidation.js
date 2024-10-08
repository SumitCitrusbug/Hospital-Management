const { z } = require("zod");

const createPatientSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name must not exceed 50 characters"),
  contactNumber: z
    .string()
    .trim()
    .min(1, "Contact number is required")
    .max(15, "Contact number must not exceed 15 characters"),
  address: z
    .string()
    .trim()
    .min(1, "Address is required")
    .max(100, "Address must not exceed 70 characters"),
  dateOfBirth: z
    .string()
    .trim()
    .min(1, "Date of birth is required")
    .max(10, "Date of birth must not exceed 10 characters"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender must be male, female or other" }),
  }),
});
module.exports = { createPatientSchema };
