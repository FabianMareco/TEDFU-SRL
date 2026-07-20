"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const METRICAS = [
  { valor: 10, sufijo: "+", etiqueta: "años de trayectoria" },
  { valor: 25, sufijo: "+", etiqueta: "obras ejecutadas" },
  { valor: 16, sufijo: "", etiqueta: "clientes institucionales" },
];

function CountUp({ hasta, sufijo }: { hasta: number; sufijo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValor(hasta);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const inicio = performance.now();
        const duracion = 1400;
        const tick = (ahora: number) => {
          const t = Math.min((ahora - inicio) / duracion, 1);
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // expo.out
          setValor(Math.round(hasta * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasta]);

  return (
    <span ref={ref}>
      {valor}
      {sufijo}
    </span>
  );
}

export function Metricas() {
  return (
    <div className="border-y border-tedfu-white/10 bg-tedfu-dark-light">
      <dl className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-tedfu-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {METRICAS.map((metrica, i) => (
          <Reveal key={metrica.etiqueta} delay={i * 80}>
            <div className="py-8 text-center sm:py-10">
              <dd className="font-display text-6xl font-bold leading-none text-tedfu-white sm:text-7xl">
                <CountUp hasta={metrica.valor} sufijo={metrica.sufijo} />
              </dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-tedfu-white/50">
                {metrica.etiqueta}
              </dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
