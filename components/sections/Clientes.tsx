import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENTES } from "@/lib/data/empresa";

export function Clientes() {
  return (
    <Section id="clientes" background="white">
      <SectionHeading
        eyebrow="Confianza"
        title="Confiaron en nosotros"
        description="Empresas, organismos públicos e instituciones que eligieron a TEDFU para sus obras."
        align="center"
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CLIENTES.map((cliente) => (
          <li
            key={cliente}
            className="flex min-h-20 items-center justify-center rounded-lg border border-tedfu-dark/10 bg-tedfu-gray px-4 py-5 text-center text-sm font-semibold text-tedfu-dark/80"
          >
            {cliente}
          </li>
        ))}
      </ul>
    </Section>
  );
}
