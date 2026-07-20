import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getObras } from "@/lib/data/obras";
import { ObrasGaleria } from "./ObrasGaleria";

export async function Obras() {
  const obras = await getObras();

  return (
    <Section id="obras" background="gray">
      <SectionHeading
        eyebrow="Nuestro trabajo"
        title="Obras realizadas"
        description="Una selección de las obras que ejecutamos para clientes públicos y privados. Filtrá por categoría y entrá a cada obra para ver el detalle."
      />
      <ObrasGaleria obras={obras} />
    </Section>
  );
}
