import type { Obra } from "@/lib/types/obra";

// Obras reales de TEDFU. Este seed alimenta la galería cuando Firestore no
// está configurado, y sirve para poblar la colección `obras` (npm run seed).
// Las imágenes apuntan a /multimedia — reemplazar por las fotos reales
// provistas por el cliente manteniendo estos nombres o editando las rutas.
export const OBRAS_SEED: Obra[] = [
  {
    id: "alcantarillas-belgrano-norte-km53",
    titulo: "Reparación de alcantarillas FFCC Belgrano Norte KM53",
    categoria: "ferroviarias",
    descripcion:
      "Reparación integral de alcantarillas sobre la traza del ferrocarril Belgrano Norte a la altura del KM53, garantizando el escurrimiento hidráulico y la seguridad operativa de la vía.",
    cliente: "Ferrovias S.A.",
    imagenes: ["/multimedia/obra-ferroviarias.svg"],
    destacada: true,
    orden: 1,
  },
  {
    id: "playa-contenedores-saldias",
    titulo: "Playa de contenedores Estación Saldías",
    categoria: "ferroviarias",
    descripcion:
      "Construcción de playa de contenedores en la Estación Saldías: movimiento de suelos, pavimentos de alta resistencia y obras complementarias para operación logística.",
    cliente: "AGP S.E.",
    imagenes: ["/multimedia/obra-ferroviarias.svg"],
    destacada: true,
    orden: 2,
  },
  {
    id: "torres-iluminacion-migueletes",
    titulo: "Torres de iluminación Playa Migueletes",
    categoria: "ferroviarias",
    descripcion:
      "Provisión y montaje de torres de iluminación para la playa ferroviaria Migueletes, incluyendo fundaciones, tendido eléctrico e instalación lumínica.",
    cliente: "AGP S.E.",
    imagenes: ["/multimedia/obra-ferroviarias.svg"],
    destacada: false,
    orden: 3,
  },
  {
    id: "acceso-ferroviario-norte-puerto",
    titulo: "Acceso Ferroviario Norte a Puerto Buenos Aires",
    categoria: "ferroviarias",
    descripcion:
      "Obras civiles para el acceso ferroviario norte al Puerto de Buenos Aires, mejorando la conexión de cargas entre la red ferroviaria y la terminal portuaria.",
    cliente: "AGP S.E.",
    imagenes: ["/multimedia/obra-ferroviarias.svg"],
    destacada: true,
    orden: 4,
  },
  {
    id: "colegio-bernasconi",
    titulo: "Colegio Bernasconi",
    categoria: "educativas",
    descripcion:
      "Trabajos de refacción y puesta en valor en el histórico Instituto Bernasconi, respetando su valor patrimonial y mejorando sus instalaciones para la comunidad educativa.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: true,
    orden: 5,
  },
  {
    id: "escuela-mac-kay",
    titulo: "Escuela Dr. Mac Kay",
    categoria: "educativas",
    descripcion:
      "Refacción integral de la Escuela Dr. Mac Kay: obra civil, instalaciones y terminaciones para mejorar las condiciones edilicias del establecimiento.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: false,
    orden: 6,
  },
  {
    id: "cfp9-barracas",
    titulo: "Centro de Formación Profesional N°9 Barracas",
    categoria: "educativas",
    descripcion:
      "Obras de mantenimiento y adecuación edilicia en el Centro de Formación Profesional N°9 del barrio de Barracas.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: false,
    orden: 7,
  },
  {
    id: "escuela-tecnica-33",
    titulo: "Escuela Técnica N°33",
    categoria: "educativas",
    descripcion:
      "Trabajos de refacción y mejoras en talleres y aulas de la Escuela Técnica N°33, adecuando los espacios a las necesidades de la enseñanza técnica.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: false,
    orden: 8,
  },
  {
    id: "escuela-15-laprida",
    titulo: "Escuela N°15 Francisco Laprida",
    categoria: "educativas",
    descripcion:
      "Refacción y mantenimiento edilicio integral de la Escuela N°15 Francisco Laprida.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: false,
    orden: 9,
  },
  {
    id: "escuela-primaria-2-parque-patricios",
    titulo: "Escuela Primaria N°2 Parque Patricios",
    categoria: "educativas",
    descripcion:
      "Obras de refacción en la Escuela Primaria N°2 de Parque Patricios: mejoras en fachada, cubiertas, sanitarios e instalaciones.",
    cliente: "Gobierno de la Ciudad de Buenos Aires",
    imagenes: ["/multimedia/obra-educativas.svg"],
    destacada: false,
    orden: 10,
  },
  {
    id: "playa-estacionamiento-puerto",
    titulo: "Playa de estacionamiento Puerto de Buenos Aires",
    categoria: "obra-publica",
    descripcion:
      "Construcción de playa de estacionamiento en el Puerto de Buenos Aires: preparación de suelos y colocación de adoquines intertrabados de alta resistencia, con señalización y obras de drenaje.",
    cliente: "AGP S.E.",
    imagenes: [
      "/multimedia/Puerto-de-Buenos-Aires3.jpeg",
      "/multimedia/Puerto-de-Buenos-Aires1.jpeg",
      "/multimedia/Puerto-de-Buenos-Aires2.jpeg",
      "/multimedia/Puerto-de-Buenos-Aires4.jpeg",
      "/multimedia/Puerto-de-Buenos-Aires5.jpeg",
    ],
    destacada: true,
    orden: 11,
  },
  {
    id: "primera-brigada-aerea-palomar",
    titulo: "Primera Brigada Aérea El Palomar",
    categoria: "obra-publica",
    descripcion:
      "Obras de infraestructura y mantenimiento edilicio para la Primera Brigada Aérea de El Palomar, Fuerza Aérea Argentina.",
    cliente: "Gobierno Nacional",
    imagenes: ["/multimedia/obra-publica.svg"],
    destacada: false,
    orden: 12,
  },
  {
    id: "barrio-procrear-berazategui",
    titulo: "Barrio Procrear Berazategui",
    categoria: "obra-publica",
    descripcion:
      "Construcción de viviendas del programa PRO.CRE.AR en Berazategui: obra civil completa, instalaciones e infraestructura urbana del conjunto habitacional.",
    cliente: "Fideicomiso PRO.CRE.AR",
    imagenes: ["/multimedia/obra-publica.svg"],
    destacada: true,
    orden: 13,
  },
  {
    id: "edificio-varela-165",
    titulo: "Edificio Varela 165",
    categoria: "edificios",
    descripcion:
      "Construcción de edificio de viviendas en Varela 165: estructura de hormigón armado, albañilería, instalaciones y terminaciones.",
    cliente: "Privado",
    imagenes: ["/multimedia/obra-edificios.svg"],
    destacada: true,
    orden: 14,
  },
  {
    id: "edificio-esparza-75",
    titulo: "Edificio Esparza 75",
    categoria: "edificios",
    descripcion:
      "Construcción de edificio de viviendas en Esparza 75, ejecutado llave en mano desde la demolición hasta la entrega final.",
    cliente: "Privado",
    imagenes: ["/multimedia/obra-edificios.svg"],
    destacada: false,
    orden: 15,
  },
  {
    id: "hospital-houssay",
    titulo: "Hospital Houssay",
    categoria: "edificios",
    descripcion:
      "Obras de refacción y mantenimiento edilicio en el Hospital Houssay, con trabajos coordinados para no interrumpir la operación del establecimiento de salud.",
    cliente: "Obra pública",
    imagenes: ["/multimedia/obra-edificios.svg"],
    destacada: false,
    orden: 16,
  },
  {
    id: "tanques-hurling-club",
    titulo: "Tanques Hurling Club",
    categoria: "edificios",
    descripcion:
      "Construcción y reparación de tanques de reserva de agua para el Hurling Club, incluyendo estructura, impermeabilización y conexiones.",
    cliente: "Hurling Club",
    imagenes: ["/multimedia/obra-edificios.svg"],
    destacada: false,
    orden: 17,
  },
  {
    id: "tendido-cables-belgrano-sur",
    titulo: "Tendido de cables FFCC Belgrano Sur",
    categoria: "ferroviarias",
    descripcion:
      "Zanjeo y tendido de cables a lo largo de la traza del ferrocarril Belgrano Sur: excavación, canalización, hormigonado y tapado, con equipos propios y personal especializado en obra ferroviaria.",
    cliente: "Línea Belgrano Sur",
    imagenes: [
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur1.jpeg",
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur2.jpeg",
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur3.jpeg",
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur4.jpeg",
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur5.jpeg",
      "/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur6.jpeg",
    ],
    destacada: true,
    orden: 18,
  },
  {
    id: "centro-cultural-munro",
    titulo: "Centro Cultural Munro",
    categoria: "obra-publica",
    descripcion:
      "Refacción y puesta en valor del Centro Cultural de Munro: trabajos en altura sobre andamios, reparación de mampostería y hormigón, y renovación integral de los espacios.",
    cliente: "Municipalidad de Vicente López",
    imagenes: [
      "/multimedia/Centro-cultural-Munro1.jpeg",
      "/multimedia/Centro-cultural-Munro2.jpeg",
      "/multimedia/Centro-cultural-Munro3.jpeg",
      "/multimedia/Centro-cultural-Munro4.jpeg",
      "/multimedia/Centro-cultural-Munro5.jpeg",
    ],
    destacada: true,
    orden: 19,
  },
  {
    id: "obras-exteriores-nordelta",
    titulo: "Obras exteriores en Nordelta",
    categoria: "edificios",
    descripcion:
      "Obras exteriores en Nordelta: movimiento de suelos, solados y terminaciones junto a canchas deportivas, con equipos compactos para trabajar en espacios reducidos.",
    cliente: "Privado — Nordelta",
    imagenes: [
      "/multimedia/Nordelta1.jpeg",
      "/multimedia/Nordelta2.jpeg",
      "/multimedia/Nordelta3.jpeg",
      "/multimedia/Nordelta4.jpeg",
    ],
    destacada: false,
    orden: 20,
  },
  {
    id: "terminal-puerto-exolgan",
    titulo: "Terminal de puerto Exolgan",
    categoria: "obra-publica",
    descripcion:
      "Instalaciones subterráneas en la terminal portuaria Exolgan: zanjeo en pavimento existente, tendido de cañerías y cámaras, y reposición de superficies operativas.",
    cliente: "Exolgan S.A.",
    imagenes: [
      "/multimedia/Terminal-de-puerto-Exolgan1.jpeg",
      "/multimedia/Terminal-de-puerto-Exolgan2.jpeg",
      "/multimedia/Terminal-de-puerto-Exolgan3.jpeg",
      "/multimedia/Terminal-de-puerto-Exolgan4.jpeg",
    ],
    destacada: false,
    orden: 21,
  },
];
