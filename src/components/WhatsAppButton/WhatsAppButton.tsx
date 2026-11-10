import { whatsappHref, whatsappMessages } from "../../lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RAMS Embedded IT Solutions on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_-8px_rgba(16,28,53,0.55)] transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-6"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-7 fill-current"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2m5.83 14.13c-.25.7-1.45 1.28-2.03 1.36-.52.07-1.18.1-1.9-.12-.44-.13-.99-.32-1.7-.63-3-1.3-4.96-4.34-5.11-4.54-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37h.57c.18 0 .42-.07.66.5.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.47.12.64-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.08.13.08.73-.17 1.43" />
      </svg>
    </a>
  );
}
