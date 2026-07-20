"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CATEGORIA_LABELS, type CategoriaObra, type Obra } from "@/lib/types/obra";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
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
        className="mt-10 flex flex-wrap gap-px border border-tedfu-dark/15 bg-tedfu-dark/15 sm:inline-flex"
      >
        {FILTROS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFiltro(f.value)}
            aria-pressed={filtro === f.value}
            className={cn(
              "grow px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors sm:grow-0",
              filtro === f.value
                ? "bg-tedfu-dark text-tedfu-white"
                : "bg-tedfu-white text-tedfu-dark/60 hover:text-tedfu-dark",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {obrasFiltradas.map((obra, i) => (
          <li key={obra.id}>
            <Reveal delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setObraAbierta(obra)}
                className="group relative block w-full overflow-hidden bg-tedfu-dark text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tedfu-orange"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={obra.imagenes[0] ?? "/multimedia/obra-publica.svg"}
                    alt={`Foto de la obra ${obra.titulo}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-tedfu-dark via-tedfu-dark/25 to-transparent"
                    aria-hidden="true"
                  />
                  {obra.destacada && (
                    <span className="absolute left-0 top-4 bg-tedfu-orange px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-tedfu-dark">
                      Destacada
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-tedfu-orange">
                      {CATEGORIA_LABELS[obra.categoria]}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-none tracking-wide text-tedfu-white">
                      {obra.titulo}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden font-mono text-xs text-tedfu-white/70 opacity-0 transition-all duration-300 ease-out group-hover:max-h-10 group-hover:opacity-100">
                      {obra.cliente} · {obra.imagenes.length} foto
                      {obra.imagenes.length === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
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
