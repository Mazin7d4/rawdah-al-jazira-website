import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

/** Floating WhatsApp action — the expected contact channel for UAE clients. */
export function WhatsAppFloat() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-lift transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
    >
      <MessageCircle className="size-7" strokeWidth={2} aria-hidden />
    </a>
  );
}
