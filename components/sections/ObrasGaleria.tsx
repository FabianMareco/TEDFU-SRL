"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CATEGORIA_LABELS, type CategoriaObra, type Obra } from "@/lib/types/obra";
import { cn } from "@/lib/cn";
import { ObraModal } from "./ObraModal";

type Filtro = "todas" | CategoriaObra;

const FILTROS: { value: Filtro; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "ferroviarias", label: CATEGORIA_LABELS.ferroviarias },
  { value: "educativas", label: CATEGORIA_LABELS.educativas },
  { value: "edificios", label: CATEGORIA_LABELS.edificios },
  { value: "obra-publica", label: CATEGORIA_LABELS["obra-publica"] },
];

export function ObrasGaleria({ obras }: { obras: Obra[] }) {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [obraAbierta, setObraAbierta] = useState<Obra | null>(null);

  const obrasFiltradas = useMemo(
    () => (filtro === "todas" ? obras : obras.filter((o) => o.categoria === filtro)),
    [obras, filtro],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar obras por categoría"
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTROS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFiltro(f.value)}
            aria-pressed={filtro === f.value}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filtro === f.value
                ? "bg-tedfu-dark text-tedfu-white"
                : "bg-tedfu-white text-tedfu-dark/70 ring-1 ring-tedfu-dark/15 hover:text-tedfu-dark",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {obrasFiltradas.map((obra) => (
          <li key={obra.id}>
            <button
              type="button"
              onClick={() => setObraAbierta(obra)}
              className="group block w-full overflow-hidden rounded-lg bg-tedfu-white text-left shadow-sm ring-1 ring-tedfu-dark/5 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tedfu-orange"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-tedfu-dark">
                <Image
                  src={obra.imagenes[0] ?? "/multimedia/obra-publica.svg"}
                  alt={`Foto de la obra ${obra.titulo}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {obra.destacada && (
                  <span className="absolute left-3 top-3 rounded bg-tedfu-orange px-2 py-1 text-xs font-bold text-tedfu-dark">
                    Destacada
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-tedfu-orange">
                  {CATEGORIA_LABELS[obra.categoria]}
                </p>
                <h3 className="mt-1 text-base font-bold text-tedfu-dark group-hover:text-tedfu-orange-dark">
                  {obra.titulo}
                </h3>
                <p className="mt-1 text-sm text-tedfu-dark/60">{obra.cliente}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {obrasFiltradas.length === 0 && (
        <p className="mt-8 text-sm text-tedfu-dark/60">
          No hay obras cargadas en esta categoría.
        </p>
      )}

      {obraAbierta && (
        <ObraModal obra={obraAbierta} onClose={() => setObraAbierta(null)} />
      )}
    </div>
  );
}
