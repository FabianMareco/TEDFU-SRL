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

      <ul className="mt-12 grid grid-cols-2 border-l border-t border-tedfu-dark/15 sm:grid-cols-3 lg:grid-cols-5">
        {CLIENTES.map((cliente) => (
          <li
            key={cliente}
            className="flex min-h-24 items-center justify-center border-b border-r border-tedfu-dark/15 px-4 py-6 text-center font-display text-lg font-bold uppercase tracking-wide text-tedfu-dark/40 transition-colors hover:text-tedfu-dark"
          >
            {cliente}
          </li>
        ))}
      </ul>
    </Section>
  );
}
