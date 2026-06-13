import { createServerFn } from "@tanstack/react-start";
import { appendToSheet } from "./sheets.server";

export interface ContactFormData {
  name: string;
  company: string;
  role: string;
  email: string;
  crm: string;
  message: string;
}

export const submitContactForm = createServerFn({ method: "POST" }).handler(
  async ({ data }: { data: ContactFormData }) => {
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
  },
);

export interface BookSessionData {
  fullName: string;
  workEmail: string;
  company: string;
  companySize: string;
  crm: string;
  challenge: string;
  notes: string;
  selectedDate: string;
  selectedSlot: string;
}

export const submitBookSession = createServerFn({ method: "POST" }).handler(
  async ({ data }: { data: BookSessionData }) => {
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
  },
);
