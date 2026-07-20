"use client";

import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { LoginForm } from "./LoginForm";
import { AdminObras } from "./AdminObras";
import { AdminConsultas } from "./AdminConsultas";
import { cn } from "@/lib/cn";

type Tab = "obras" | "consultas";

export function AdminApp() {
  const [user, setUser] = useState<User | null>(null);
  const [cargando, setCargando] = useState(true);
  const [tab, setTab] = useState<Tab>("obras");
  const [errorConfig, setErrorConfig] = useState(false);

  useEffect(() => {
    let unsubscribe = () => {};
    (async () => {
      try {
        const { getFirebaseAuth } = await import("@/lib/firebase/client");
        const { onAuthStateChanged } = await import("firebase/auth");
        unsubscribe = onAuthStateChanged(getFirebaseAuth(), (u) => {
          setUser(u);
          setCargando(false);
        });
      } catch (error) {
        console.error("Firebase no está configurado:", error);
        setErrorConfig(true);
        setCargando(false);
      }
    })();
    return () => unsubscribe();
  }, []);

  const cerrarSesion = async () => {
    const { getFirebaseAuth } = await import("@/lib/firebase/client");
    const { signOut } = await import("firebase/auth");
    await signOut(getFirebaseAuth());
  };

  if (cargando) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-tedfu-dark/60">Cargando...</p>
      </div>
    );
  }

  if (errorConfig) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-xl font-bold text-tedfu-dark">Firebase sin configurar</h1>
        <p className="mt-3 text-sm text-tedfu-dark/70">
          Para usar el panel hay que completar las variables NEXT_PUBLIC_FIREBASE_* en
          el archivo .env.local (ver .env.local.example).
        </p>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-tedfu-dark">Panel de administración</h1>
        <button
          type="button"
          onClick={cerrarSesion}
          className="text-sm font-medium text-tedfu-dark/60 underline hover:text-tedfu-dark"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="mt-6 flex gap-2 border-b border-tedfu-dark/10">
        {(
          [
            { value: "obras", label: "Obras" },
            { value: "consultas", label: "Consultas" },
          ] as const
        ).map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={cn(
              "border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors",
              tab === t.value
                ? "border-tedfu-orange text-tedfu-dark"
                : "border-transparent text-tedfu-dark/50 hover:text-tedfu-dark",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="py-6">{tab === "obras" ? <AdminObras /> : <AdminConsultas />}</div>
    </div>
  );
}
