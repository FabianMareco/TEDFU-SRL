import { CONTACT, SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "TEDFU S.R.L.",
    slogan: "Construyendo con pasión",
    description:
      "Constructora con 10 años de trayectoria en obras públicas y privadas: infraestructura ferroviaria, instituciones educativas, edificios y obra civil.",
    url: SITE_URL,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Área Metropolitana de Buenos Aires (AMBA), Argentina",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    knowsAbout: [
      "Obra llave en mano",
      "Infraestructura ferroviaria",
      "Mantenimiento edilicio",
      "Demoliciones",
      "Instalaciones",
      "Reformas y construcciones nuevas",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
