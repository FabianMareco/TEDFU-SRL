import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CLIENTES_DESTACADOS } from "@/lib/data/empresa";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-tedfu-dark text-tedfu-white">
      <div className="absolute inset-0">
        <Image
          src="/multimedia/hero-obra.svg"
          alt="Obra en construcción ejecutada por TEDFU S.R.L."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tedfu-dark/70" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold tracking-wide text-tedfu-orange uppercase">
          TEDFU S.R.L. — Construyendo con pasión
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Constructora con 10 años de trayectoria en obras públicas y privadas
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-tedfu-white/85 sm:text-xl">
          Infraestructura ferroviaria · Obra civil · Instituciones · Edificios
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#contacto" size="lg">
            Pedí tu presupuesto
          </Button>
          <Button href="#obras" variant="outline" size="lg">
            Ver obras realizadas
          </Button>
        </div>
      </div>

      <div className="relative border-t border-tedfu-white/10 bg-tedfu-dark/80">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="sr-only">Clientes que confiaron en TEDFU</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-tedfu-white/60">
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
