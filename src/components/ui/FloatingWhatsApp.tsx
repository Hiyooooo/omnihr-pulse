import React from "react";

interface FloatingWhatsAppProps {
  whatsappUrl: string;
}

export function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  return (
    <aside
      aria-label="Bantuan WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi tim sales kami melalui WhatsApp"
        className="relative flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full font-mono text-xs font-semibold shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
      >
        {/* Glow pulse ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 relative z-10 shrink-0"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.47 0-2.91-.39-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.21 8.21 0 01-1.26-4.4c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3z" />
        </svg>

        <span className="relative z-10 tracking-tight hidden sm:inline">
          Konsultasi Sales
        </span>
      </a>
    </aside>
  );
}
