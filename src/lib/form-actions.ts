import { createServerFn } from "@tanstack/react-start";
import { appendToSheet } from "./sheets.server";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string(),
  company: z.string(),
  role: z.string(),
  email: z.string(),
  crm: z.string(),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => contactFormSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await appendToSheet("contact", {
        name: data.name,
        company: data.company,
        role: data.role,
        email: data.email,
        crm: data.crm,
        message: data.message,
      });
      return { success: true as const };
    } catch (err) {
      console.error("[submitContactForm]", err);
      throw err;
    }
  });

export const bookSessionSchema = z.object({
  fullName: z.string(),
  workEmail: z.string(),
  company: z.string(),
  companySize: z.string(),
  crm: z.string(),
  challenge: z.string(),
  notes: z.string(),
  selectedDate: z.string(),
  selectedSlot: z.string(),
});

export type BookSessionData = z.infer<typeof bookSessionSchema>;

export const submitBookSession = createServerFn({ method: "POST" })
  .validator((data: BookSessionData) => bookSessionSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await appendToSheet("book", {
        fullName: data.fullName,
        workEmail: data.workEmail,
        company: data.company,
        companySize: data.companySize,
        crm: data.crm,
        challenge: data.challenge,
        notes: data.notes,
        selectedDate: data.selectedDate,
        selectedSlot: data.selectedSlot,
      });
      return { success: true as const };
    } catch (err) {
      console.error("[submitBookSession]", err);
      throw err;
    }
  });
