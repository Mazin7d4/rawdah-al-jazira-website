import { z } from "zod";

/**
 * Shared by the client form (react-hook-form) and the /api/contact route,
 * so server-side validation can never drift from what the form allows.
 * Length caps double as abuse protection on the API.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  company: z.string().trim().max(150, "Company name is too long").optional(),
  email: z
    .email("Please enter a valid email address")
    .max(200, "Email is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  service: z
    .string()
    .min(1, "Please select a service")
    .max(100, "Invalid service"),
  facility: z
    .string()
    .trim()
    .max(200, "Facility description is too long")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your requirements")
    .max(3000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;
