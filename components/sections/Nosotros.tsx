import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALORES_TEDFU } from "@/lib/data/empresa";

const COMPROMISOS = [
  {
    titulo: "Calidad de ejecución",
    detalle: "Terminaciones y procesos a la altura de clientes institucionales.",
  },
  {
    titulo: "Seguridad e higiene",
    detalle: "Personal capacitado y protocolos de obra en cada proyecto.",
  },
  {
    titulo: "Medio ambiente",
    detalle: "Gestión responsable de residuos y del entorno de trabajo.",
  },
  {
    titulo: "Cumplimiento",
    detalle: "Plazos y compromisos respaldados por 10 años de obra pública.",
  },
];

export function Nosotros() {
  return (
    <Section id="nosotros" background="gray">
      <SectionHeading
        eyebrow="Quiénes somos"
        title="Un equipo que construye desde la experiencia"
        description="TEDFU S.R.L. está formada por un equipo con amplia experiencia en el rubro ferroviario y en obras civiles públicas y privadas. Trabajamos para el gobierno nacional en universidades, fuerzas armadas y viviendas Procrear, y para empresas e instituciones que exigen calidad, plazos y seriedad."
      />

      <div className="mt-14">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-tedfu-acero">
          Nuestros valores — TEDFU
        </p>
        <div className="mt-6 grid grid-cols-1 border-l border-t border-tedfu-dark/15 sm:grid-cols-2 lg:grid-cols-5">
          {VALORES_TEDFU.map((valor) => (
            <div
              key={valor.letra}
              className="border-b border-r border-tedfu-dark/15 bg-tedfu-white p-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-bold leading-none text-tedfu-orange"
              >
                {valor.letra}
              </span>
              <p className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-tedfu-dark">
                {valor.palabra}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-tedfu-dark/70">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-tedfu-acero">
          Compromiso
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISOS.map((compromiso) => (
            <div key={compromiso.titulo} className="border-l-2 border-tedfu-orange pl-4">
              <dt className="font-display text-lg font-bold uppercase tracking-wide text-tedfu-dark">
                {compromiso.titulo}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-tedfu-dark/70">
                {compromiso.detalle}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
