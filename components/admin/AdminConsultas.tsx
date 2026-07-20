"use client";

import { useCallback, useEffect, useState } from "react";
import type { Consulta, EstadoConsulta } from "@/lib/types/consulta";
import { TIPOS_OBRA } from "@/lib/consultas";
import { cn } from "@/lib/cn";

const ESTADOS: { value: EstadoConsulta; label: string }[] = [
  { value: "nueva", label: "Nueva" },
  { value: "contactado", label: "Contactado" },
  { value: "cerrada", label: "Cerrada" },
];

const estadoStyles: Record<EstadoConsulta, string> = {
  nueva: "bg-tedfu-orange/15 text-tedfu-orange-dark",
  contactado: "bg-blue-100 text-blue-700",
  cerrada: "bg-tedfu-dark/10 text-tedfu-dark/60",
};

export function AdminConsultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargar = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { collection, getDocs } = await import("firebase/firestore");
      const snapshot = await getDocs(collection(getFirestoreDb(), "consultas"));
      const lista = snapshot.docs
        .map((d) => ({ ...(d.data() as Omit<Consulta, "id">), id: d.id }))
        .sort((a, b) => b.creadoEn - a.creadoEn);
      setConsultas(lista);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar las consultas.");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const cambiarEstado = async (consulta: Consulta, estado: EstadoConsulta) => {
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { doc, updateDoc } = await import("firebase/firestore");
      await updateDoc(doc(getFirestoreDb(), "consultas", consulta.id), { estado });
      setConsultas((prev) =>
        prev.map((c) => (c.id === consulta.id ? { ...c, estado } : c)),
      );
    } catch (err) {
      console.error(err);
      setError("No se pudo actualizar el estado.");
    }
  };

  const tipoLabel = (valor: string) =>
    TIPOS_OBRA.find((t) => t.value === valor)?.label ?? valor;

  return (
    <div>
      <p className="text-sm text-tedfu-dark/60">
        {cargando ? "Cargando consultas..." : `${consultas.length} consultas recibidas`}
      </p>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <ul className="mt-4 space-y-3">
        {consultas.map((consulta) => (
          <li
            key={consulta.id}
            className="rounded-lg border border-tedfu-dark/10 bg-tedfu-white p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-tedfu-dark">{consulta.nombre}</h3>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      estadoStyles[consulta.estado] ?? estadoStyles.nueva,
                    )}
                  >
                    {ESTADOS.find((e) => e.value === consulta.estado)?.label ??
                      consulta.estado}
                  </span>
                </div>
                <p className="mt-1 text-sm text-tedfu-dark/70">
                  {tipoLabel(consulta.tipoObra)} · {consulta.ubicacion}
                </p>
                <p className="mt-1 text-sm text-tedfu-dark/70">
                  <a href={`tel:${consulta.telefono}`} className="underline">
                    {consulta.telefono}
                  </a>{" "}
                  ·{" "}
                  <a href={`mailto:${consulta.email}`} className="underline">
                    {consulta.email}
                  </a>
                </p>
                <p className="mt-2 text-sm text-tedfu-dark/80">{consulta.descripcion}</p>
                <p className="mt-2 text-xs text-tedfu-dark/50">
                  {new Date(consulta.creadoEn).toLocaleString("es-AR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              <label className="shrink-0 text-sm">
                <span className="sr-only">Cambiar estado de la consulta</span>
                <select
                  value={consulta.estado}
                  onChange={(e) =>
                    cambiarEstado(consulta, e.target.value as EstadoConsulta)
                  }
                  className="rounded-md border border-tedfu-dark/15 px-3 py-2 text-sm focus:border-tedfu-orange focus:outline-none"
                >
                  {ESTADOS.map((estado) => (
                    <option key={estado.value} value={estado.value}>
                      {estado.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </li>
        ))}
      </ul>

      {!cargando && consultas.length === 0 && !error && (
        <p className="mt-6 text-sm text-tedfu-dark/60">
          Todavía no hay consultas recibidas.
        </p>
      )}
    </div>
  );
}
