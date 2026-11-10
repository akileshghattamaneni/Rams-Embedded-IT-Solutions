import { institute } from "../data/institute";
import { whatsappHref as buildHref, whatsappMessages } from "./whatsapp";

export function hasEmail() {
  return institute.email.trim().length > 0;
}

export function hasPhone() {
  return institute.phoneTel.trim().length > 0;
}

export function hasWhatsApp() {
  return institute.whatsappNumber.trim().length > 0;
}

export function telHref() {
  return hasPhone() ? `tel:${institute.phoneTel}` : undefined;
}

export function mailHref() {
  return hasEmail() ? `mailto:${institute.email}` : undefined;
}

export function whatsappHref(message?: string) {
  return buildHref(message ?? whatsappMessages.general);
}

export function mapsEmbedSrc() {
  const query = encodeURIComponent(institute.addressQuery);
  return `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
}

export function mapsLink() {
  const query = encodeURIComponent(institute.addressQuery);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
