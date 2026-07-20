import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const STUB_SECTIONS = [
  {
    id: "nosotros",
    background: "gray" as const,
    eyebrow: "Quiénes somos",
    title: "Nosotros",
  },
  {
    id: "servicios",
    background: "white" as const,
    eyebrow: "Qué hacemos",
    title: "Servicios",
  },
  {
    id: "obras",
    background: "gray" as const,
    eyebrow: "Nuestro trabajo",
    title: "Obras realizadas",
  },
  {
    id: "clientes",
    background: "white" as const,
    eyebrow: "Confianza",
    title: "Confiaron en nosotros",
  },
];

export default function Home() {
  return (
    <>
      <Section id="inicio" background="dark" className="flex min-h-[85vh] items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-tedfu-orange uppercase">
            TEDFU S.R.L. — Construyendo con pasión
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-tedfu-white sm:text-5xl">
            Constructora con 10 años de trayectoria en obras públicas y privadas
          </h1>
          <p className="mt-6 text-lg text-tedfu-white/80">
            Infraestructura ferroviaria · Obra civil · Instituciones · Edificios
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contacto" size="lg">
              Pedí tu presupuesto
            </Button>
            <Button href="#obras" variant="outline" size="lg">
              Ver obras realizadas
            </Button>
          </div>
        </div>
      </Section>

      {STUB_SECTIONS.map((section) => (
        <Section key={section.id} id={section.id} background={section.background}>
          <SectionHeading eyebrow={section.eyebrow} title={section.title} />
          <p className="mt-6 text-sm text-tedfu-dark/50">Contenido en desarrollo.</p>
        </Section>
      ))}

      <Section id="contacto" background="dark">
        <SectionHeading eyebrow="Hablemos" title="Contanos tu proyecto" light />
        <p className="mt-6 text-sm text-tedfu-white/50">Formulario en desarrollo.</p>
      </Section>
    </>
  );
}
