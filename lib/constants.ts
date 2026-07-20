export const SITE_NAME = "TEDFU S.R.L.";
export const SITE_SLOGAN = "Construyendo con pasión";
export const SITE_URL = "https://www.tedfu.com.ar";

export const CONTACT = {
  phoneDisplay: "+54 9 11 0000-0000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491100000000",
  email: "contacto@tedfu.com.ar",
  zone: "AMBA (Área Metropolitana de Buenos Aires)",
};

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#obras", label: "Obras realizadas" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export function buildWhatsappUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, quiero pedir un presupuesto para una obra.";
