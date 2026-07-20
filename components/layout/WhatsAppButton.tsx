import { buildWhatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.66 4.523 1.805 6.379L4 29l7.83-1.762A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.7a9.63 9.63 0 0 1-4.913-1.35l-.352-.21-4.65 1.046 1.02-4.53-.23-.365A9.65 9.65 0 0 1 6.3 15c0-5.35 4.35-9.7 9.701-9.7 5.35 0 9.699 4.35 9.699 9.7s-4.349 9.7-9.699 9.7Zm5.315-7.26c-.29-.145-1.716-.847-1.982-.944-.266-.097-.46-.145-.653.146-.194.29-.75.943-.919 1.137-.169.194-.338.218-.628.073-.29-.146-1.223-.451-2.33-1.437-.861-.768-1.443-1.716-1.612-2.006-.169-.29-.018-.447.127-.592.13-.13.29-.338.435-.507.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.146-.653-1.573-.895-2.155-.236-.567-.475-.49-.653-.499a12.6 12.6 0 0 0-.556-.011.94.94 0 0 0-.677.316c-.23.253-.883.86-.883 2.1s.905 2.437 1.03 2.605c.126.169 1.782 2.72 4.317 3.815.603.26 1.074.416 1.441.532.605.192 1.156.165 1.591.1.485-.073 1.716-.702 1.959-1.38.242-.677.242-1.258.169-1.379-.072-.121-.266-.194-.556-.339Z" />
      </svg>
    </a>
  );
}
