import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CIFRAS, VALORES_TEDFU } from "@/lib/data/empresa";

export function Nosotros() {
  return (
    <Section id="nosotros" background="gray">
      <SectionHeading
        eyebrow="Quiénes somos"
        title="Un equipo que construye desde la experiencia"
        description="TEDFU S.R.L. está formada por un equipo con amplia experiencia en el rubro ferroviario y en obras civiles públicas y privadas. Trabajamos para el gobierno nacional en universidades, fuerzas armadas y viviendas Procrear, y para empresas e instituciones que exigen calidad, plazos y seriedad."
      />

      <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {CIFRAS.map((cifra) => (
          <div
            key={cifra.etiqueta}
            className="rounded-lg border border-tedfu-dark/10 bg-tedfu-white p-8 text-center"
          >
            <dd className="text-4xl font-bold text-tedfu-orange sm:text-5xl">
              {cifra.valor}
            </dd>
            <dt className="mt-2 text-sm font-medium text-tedfu-dark/70">
              {cifra.etiqueta}
            </dt>
          </div>
        ))}
      </dl>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-tedfu-dark">
          Nuestros valores: <span className="text-tedfu-orange">TEDFU</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {VALORES_TEDFU.map((valor) => (
            <div
              key={valor.letra}
              className="rounded-lg bg-tedfu-white p-6 shadow-sm ring-1 ring-tedfu-dark/5"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-md bg-tedfu-dark text-2xl font-bold text-tedfu-orange"
              >
                {valor.letra}
              </span>
              <p className="mt-4 text-base font-bold text-tedfu-dark">{valor.palabra}</p>
              <p className="mt-1 text-sm text-tedfu-dark/70">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
