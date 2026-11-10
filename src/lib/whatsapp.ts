import { institute } from "../data/institute";

export type WhatsAppFormDetails = {
  fullName: string;
  email: string;
  mobile: string;
  course: string;
  category: string;
  message: string;
};

export function whatsappNumberDigits() {
  return institute.whatsappNumber.replace(/\D/g, "");
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumberDigits()}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: `Hello RAMS Embedded IT Solutions,

I am interested in your Embedded Systems training programs.

I would like to know more about the available courses, syllabus, duration and admission process.

Please share the details.

Thank you.`,

  contactPage: `Hello RAMS Embedded IT Solutions,

I visited your website and would like to enquire about your Embedded Systems courses.

Please contact me with more details.

Thank you.`,

  course(courseName: string) {
    return `Hello RAMS Embedded IT Solutions,

I am interested in the ${courseName} course.

Please share the detailed syllabus, course duration, training details and admission information.

Thank you.`;
  },

  project(projectTitle: string) {
    return `Hello RAMS Embedded IT Solutions,

I would like to know more about practical learning in ${projectTitle}.

Please share how this area is covered in your Embedded Systems training.

Thank you.`;
  },

  form(payload: WhatsAppFormDetails) {
    return `Hello RAMS Embedded IT Solutions,

I would like to enquire about your Embedded Systems training programs.

*Student Enquiry Details*

Name: ${payload.fullName}

Email: ${payload.email}

Mobile: ${payload.mobile}

Interested Course: ${payload.course}

Student Category: ${payload.category}

Message: ${payload.message}

I found your institute through your website.

Please contact me with further details.

Thank you.`;
  },
};

export function whatsappHref(message: string = whatsappMessages.general) {
  return buildWhatsAppUrl(message);
}

export function openWhatsApp(message: string) {
  const url = buildWhatsAppUrl(message);
  try {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (opened) return true;
  } catch {
    return false;
  }
  return false;
}
