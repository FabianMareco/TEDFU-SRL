import "server-only";
import type { Obra } from "@/lib/types/obra";
import { OBRAS_SEED } from "./obras-seed";

const ADMIN_ENVS_PRESENT =
  !!process.env.FIREBASE_PROJECT_ID &&
  !!process.env.FIREBASE_CLIENT_EMAIL &&
  !!process.env.FIREBASE_PRIVATE_KEY;

/**
 * Devuelve las obras desde Firestore (colección `obras`) cuando las
 * credenciales están configuradas; si no, cae al seed local para que el
 * sitio funcione igual antes de conectar Firebase.
 */
export async function getObras(): Promise<Obra[]> {
  if (ADMIN_ENVS_PRESENT) {
    try {
      const { getAdminDb } = await import("@/lib/firebase/admin");
      const snapshot = await getAdminDb().collection("obras").get();
      if (!snapshot.empty) {
        const obras = snapshot.docs.map((doc) => ({
          ...(doc.data() as Omit<Obra, "id">),
          id: doc.id,
        }));
        return obras.sort((a, b) => a.orden - b.orden);
      }
    } catch (error) {
      console.error("No se pudo leer la colección obras de Firestore:", error);
    }
  }
  return [...OBRAS_SEED].sort((a, b) => a.orden - b.orden);
}
