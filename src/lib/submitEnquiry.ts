import {
  openWhatsApp,
  whatsappMessages,
  type WhatsAppFormDetails,
} from "./whatsapp";

export type EnquiryPayload = WhatsAppFormDetails;

export type EnquiryResult =
  | { ok: true; opened: true }
  | { ok: false; opened: false };

export function submitEnquiry(payload: EnquiryPayload): EnquiryResult {
  const opened = openWhatsApp(whatsappMessages.form(payload));
  return opened ? { ok: true, opened: true } : { ok: false, opened: false };
}
