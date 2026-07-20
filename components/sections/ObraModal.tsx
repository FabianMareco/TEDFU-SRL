"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CATEGORIA_LABELS, type Obra } from "@/lib/types/obra";
import { cn } from "@/lib/cn";

export function ObraModal({ obra, onClose }: { obra: Obra; onClose: () => void }) {
  const [indice, setIndice] = useState(0);
  const total = obra.imagenes.length;

  const anterior = useCallback(
    () => setIndice((i) => (i - 1 + total) % total),
    [total],
  );
  const siguiente = useCallback(() => setIndice((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, anterior, siguiente]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de la obra ${obra.titulo}`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Cerrar detalle"
        onClick={onClose}
        className="absolute inset-0 bg-tedfu-dark/80 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-tedfu-white shadow-2xl">
        <div className="relative aspect-[16/10] shrink-0 bg-tedfu-dark">
          <Image
            src={obra.imagenes[indice] ?? "/multimedia/obra-publica.svg"}
            alt={`Foto ${indice + 1} de ${total} de la obra ${obra.titulo}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={anterior}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-tedfu-dark/70 p-2 text-tedfu-white hover:bg-tedfu-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={siguiente}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-tedfu-dark/70 p-2 text-tedfu-white hover:bg-tedfu-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {obra.imagenes.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    aria-label={`Ver foto ${i + 1}`}
                    onClick={() => setIndice(i)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      i === indice ? "bg-tedfu-orange" : "bg-tedfu-white/50",
                    )}
                  />
                ))}
              </div>
            </>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-3 top-3 rounded-full bg-tedfu-dark/70 p-2 text-tedfu-white hover:bg-tedfu-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-tedfu-orange">
            {CATEGORIA_LABELS[obra.categoria]}
          </p>
          <h3 className="mt-1 text-xl font-bold text-tedfu-dark">{obra.titulo}</h3>
          <dl className="mt-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-tedfu-dark">Cliente:</dt>
              <dd className="text-tedfu-dark/70">{obra.cliente}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm leading-relaxed text-tedfu-dark/80">
            {obra.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}
