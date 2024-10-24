const { z } = require("zod");

const createRecordSchema = z.object({
  doctorId: z
    .string()
    .trim()
    .min(1, "Doctor Id is required")
    .max(50, "Doctor Id must not exceed 50 characters"),
  patientId: z
    .string()
    .trim()
    .min(1, "Patient Id is required")
    .max(50, "Patient Id must not exceed 50 characters"),
  description: z
    .string()
    .trim()
    .min(1, "Prescription is required")
    .max(50, "Prescription must not exceed 50 characters"),
  recordDate: z
    .string()
    .trim()
    .min(1, "Date is required")
    .max(10, "Date must not exceed 10 characters"),
});

module.exports = { createRecordSchema };
