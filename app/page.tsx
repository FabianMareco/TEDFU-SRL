import { Hero } from "@/components/sections/Hero";
import { Nosotros } from "@/components/sections/Nosotros";
import { Servicios } from "@/components/sections/Servicios";
import { Obras } from "@/components/sections/Obras";
import { Clientes } from "@/components/sections/Clientes";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Servicios />
      <Obras />
      <Clientes />

      <Section id="contacto" background="dark">
        <SectionHeading eyebrow="Hablemos" title="Contanos tu proyecto" light />
        <p className="mt-6 text-sm text-tedfu-white/50">Formulario en desarrollo.</p>
      </Section>
    </>
  );
}
