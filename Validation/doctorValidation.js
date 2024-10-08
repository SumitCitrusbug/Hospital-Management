const { z } = require("zod");

const createDoctorSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must not exceed 20 characters"),
  specialization: z
    .string()
    .min(1, "Specialization is required")
    .max(50, "Specialization must not exceed 50 characters"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 characters long")
    .max(15, "Contact number must not exceed 15 characters"),
});

const updateDoctorSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name must not exceed 20 characters"),
  specialization: z
    .string()
    .trim()
    .min(1, "Specialization is required")
    .max(50, "Specialization must not exceed 50 characters"),
  contactNumber: z
    .string()
    .trim()
    .min(10, "Contact number must be at least 10 characters long")
    .max(15, "Contact number must not exceed 15 characters"),
});

module.exports = {
  createDoctorSchema,
  updateDoctorSchema,
};
