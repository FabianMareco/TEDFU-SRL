import type { TipoObraConsulta } from "@/lib/types/consulta";

export const TIPOS_OBRA: { value: TipoObraConsulta; label: string }[] = [
  { value: "reforma", label: "Reforma" },
  { value: "obra-nueva", label: "Obra nueva" },
  { value: "mantenimiento", label: "Mantenimiento" },
  { value: "infraestructura", label: "Infraestructura" },
  { value: "demolicion", label: "Demolición" },
  { value: "otro", label: "Otro" },
];

export interface DatosConsulta {
  nombre: string;
  telefono: string;
  email: string;
  tipoObra: TipoObraConsulta;
  ubicacion: string;
  descripcion: string;
}

export function construirMensajeWhatsapp(datos: DatosConsulta): string {
  const tipoLabel =
    TIPOS_OBRA.find((t) => t.value === datos.tipoObra)?.label ?? datos.tipoObra;
  return [
    "Hola Lino, te escribo desde la web de TEDFU.",
    "",
    `*Nombre:* ${datos.nombre}`,
    `*Teléfono:* ${datos.telefono}`,
    `*Email:* ${datos.email}`,
    `*Tipo de obra:* ${tipoLabel}`,
    `*Ubicación:* ${datos.ubicacion}`,
    "",
    "*Proyecto:*",
    datos.descripcion,
  ].join("\n");
}

/**
 * Guarda la consulta en la colección `consultas` de Firestore.
 * Devuelve false si Firebase no está configurado o falla el guardado —
 * el flujo de WhatsApp sigue funcionando igual.
 */
export async function guardarConsulta(datos: DatosConsulta): Promise<boolean> {
  try {
    const { getFirestoreDb } = await import("@/lib/firebase/client");
    const { addDoc, collection } = await import("firebase/firestore");
    await addDoc(collection(getFirestoreDb(), "consultas"), {
      ...datos,
      estado: "nueva",
      creadoEn: Date.now(),
    });
    return true;
  } catch (error) {
    console.error("No se pudo guardar la consulta en Firestore:", error);
    return false;
  }
}
