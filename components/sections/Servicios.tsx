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

      <div className="mt-12 grid grid-cols-1 border-l border-t border-tedfu-dark/15 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICIOS.map((servicio) => (
          <div
            key={servicio.titulo}
            className="group border-b border-r border-tedfu-dark/15 p-6 transition-colors hover:bg-tedfu-gray"
          >
            <span className="inline-flex text-tedfu-acero transition-colors group-hover:text-tedfu-orange">
              <ServicioIcon icono={servicio.icono} />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-tedfu-dark">
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
