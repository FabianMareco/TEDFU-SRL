import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICIOS } from "@/lib/data/empresa";
import { ServicioIcon } from "./ServicioIcon";

export function Servicios() {
  return (
    <Section id="servicios" background="white">
      <SectionHeading
        eyebrow="Qué hacemos"
        title="Servicios"
        description="Cubrimos todo el ciclo de la obra: desde la planificación y la gestión hasta la ejecución, el mantenimiento y las reformas."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICIOS.map((servicio) => (
          <div
            key={servicio.titulo}
            className="group rounded-lg border border-tedfu-dark/10 p-6 transition-colors hover:border-tedfu-orange"
          >
            <span className="inline-flex rounded-md bg-tedfu-dark p-3 text-tedfu-orange">
              <ServicioIcon icono={servicio.icono} />
            </span>
            <h3 className="mt-4 text-base font-bold text-tedfu-dark">
              {servicio.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-tedfu-dark/70">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
