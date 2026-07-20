// Puebla la colección `obras` de Firestore con el seed local.
// Uso: npm run seed  (requiere .env.local con las credenciales de Firebase Admin)
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { OBRAS_SEED } from "../lib/data/obras-seed.ts";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!projectId || !clientEmail || !privateKey) {
  console.error(
    "Faltan FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL o FIREBASE_PRIVATE_KEY en .env.local",
  );
  process.exit(1);
}

if (getApps().length === 0) {
  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
}

const db = getFirestore();

async function seed() {
  const batch = db.batch();
  for (const obra of OBRAS_SEED) {
    const { id, ...data } = obra;
    batch.set(db.collection("obras").doc(id), data, { merge: true });
  }
  await batch.commit();
  console.log(`Seed completado: ${OBRAS_SEED.length} obras cargadas en Firestore.`);
}

seed().catch((error) => {
  console.error("Error al ejecutar el seed:", error);
  process.exit(1);
});
