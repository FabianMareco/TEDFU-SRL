import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CLIENTES_DESTACADOS } from "@/lib/data/empresa";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-tedfu-dark text-tedfu-white">
      <div className="absolute inset-0">
        <Image
          src="/multimedia/Tendido-de-cables-para-el-ferrocarril-belgrano-Sur1.jpeg"
          alt="Equipo de TEDFU trabajando en el tendido de cables del ferrocarril Belgrano Sur"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tedfu-dark/75" />
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p
          className="hero-seq font-mono text-xs uppercase tracking-[0.3em] text-tedfu-orange"
          style={{ "--seq-delay": "0ms" } as React.CSSProperties}
        >
          TEDFU S.R.L. — Construyendo con pasión
        </p>
        <h1
          className="hero-seq mt-4 max-w-4xl font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          style={{ "--seq-delay": "90ms" } as React.CSSProperties}
        >
          Constructora con 10 años de trayectoria en obras públicas y privadas
        </h1>
        <p
          className="hero-seq mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.15em] text-tedfu-white/70 sm:text-base"
          style={{ "--seq-delay": "180ms" } as React.CSSProperties}
        >
          Infraestructura ferroviaria · Obra civil · Instituciones · Edificios
        </p>
        <div
          className="hero-seq mt-10 flex flex-wrap items-center gap-6"
          style={{ "--seq-delay": "270ms" } as React.CSSProperties}
        >
          <Button href="#contacto" size="lg">
            Pedí tu presupuesto
          </Button>
          <Link
            href="#obras"
            className="group font-mono text-sm uppercase tracking-[0.15em] text-tedfu-white/80 transition-colors hover:text-tedfu-orange"
          >
            Ver obras realizadas{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="relative border-t border-tedfu-white/10 bg-tedfu-dark/85">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="sr-only">Clientes que confiaron en TEDFU</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-tedfu-white/45">
            {CLIENTES_DESTACADOS.map((cliente) => (
              <li key={cliente} className="whitespace-nowrap">
                {cliente}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
