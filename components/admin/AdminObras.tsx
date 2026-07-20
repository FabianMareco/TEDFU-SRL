"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CATEGORIA_LABELS, type CategoriaObra, type Obra } from "@/lib/types/obra";
import { ObraForm } from "./ObraForm";

export function AdminObras() {
  const [obras, setObras] = useState<Obra[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [editando, setEditando] = useState<Obra | "nueva" | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { collection, getDocs } = await import("firebase/firestore");
      const snapshot = await getDocs(collection(getFirestoreDb(), "obras"));
      const lista = snapshot.docs
        .map((d) => ({ ...(d.data() as Omit<Obra, "id">), id: d.id }))
        .sort((a, b) => a.orden - b.orden);
      setObras(lista);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar las obras. Revisá la conexión y los permisos.");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const alternarDestacada = async (obra: Obra) => {
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { doc, updateDoc } = await import("firebase/firestore");
      await updateDoc(doc(getFirestoreDb(), "obras", obra.id), {
        destacada: !obra.destacada,
      });
      setObras((prev) =>
        prev.map((o) => (o.id === obra.id ? { ...o, destacada: !o.destacada } : o)),
      );
    } catch (err) {
      console.error(err);
      setError("No se pudo actualizar la obra.");
    }
  };

  const eliminar = async (obra: Obra) => {
    if (!window.confirm(`¿Eliminar la obra "${obra.titulo}"? Esta acción no se puede deshacer.`)) {
      return;
    }
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { doc, deleteDoc } = await import("firebase/firestore");
      await deleteDoc(doc(getFirestoreDb(), "obras", obra.id));
      setObras((prev) => prev.filter((o) => o.id !== obra.id));
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar la obra.");
    }
  };

  if (editando) {
    return (
      <ObraForm
        obra={editando === "nueva" ? null : editando}
        onListo={() => {
          setEditando(null);
          cargar();
        }}
        onCancelar={() => setEditando(null)}
      />
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-tedfu-dark/60">
          {cargando ? "Cargando obras..." : `${obras.length} obras cargadas`}
        </p>
        <Button type="button" onClick={() => setEditando("nueva")}>
          + Nueva obra
        </Button>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <ul className="mt-4 space-y-3">
        {obras.map((obra) => (
          <li
            key={obra.id}
            className="rounded-lg border border-tedfu-dark/10 bg-tedfu-white p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-tedfu-orange">
                  {CATEGORIA_LABELS[obra.categoria as CategoriaObra] ?? obra.categoria}
                  {obra.destacada && " · Destacada"}
                </p>
                <h3 className="mt-0.5 font-bold text-tedfu-dark">{obra.titulo}</h3>
                <p className="text-sm text-tedfu-dark/60">
                  {obra.cliente} · Orden {obra.orden} · {obra.imagenes.length} foto
                  {obra.imagenes.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => alternarDestacada(obra)}
                  className="rounded-md border border-tedfu-dark/15 px-3 py-1.5 font-medium text-tedfu-dark/70 hover:border-tedfu-orange hover:text-tedfu-dark"
                >
                  {obra.destacada ? "Quitar destacada" : "Destacar"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditando(obra)}
                  className="rounded-md border border-tedfu-dark/15 px-3 py-1.5 font-medium text-tedfu-dark/70 hover:border-tedfu-orange hover:text-tedfu-dark"
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => eliminar(obra)}
                  className="rounded-md border border-red-200 px-3 py-1.5 font-medium text-red-600 hover:bg-red-50"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {!cargando && obras.length === 0 && !error && (
        <p className="mt-6 text-sm text-tedfu-dark/60">
          Todavía no hay obras cargadas. Podés crear la primera con &quot;+ Nueva
          obra&quot; o correr <code className="rounded bg-tedfu-gray px-1">npm run seed</code>{" "}
          para cargar las obras iniciales.
        </p>
      )}
    </div>
  );
}
