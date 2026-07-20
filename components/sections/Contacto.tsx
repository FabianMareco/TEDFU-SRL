import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { ContactoForm } from "./ContactoForm";

export function Contacto() {
  return (
    <Section id="contacto" background="dark">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Hablemos"
            title="Contanos tu proyecto"
            description="Completá el formulario y tu consulta le llega directo al WhatsApp de Lino, que atiende personalmente todas las consultas."
            light
          />
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-wide text-tedfu-orange">
                Teléfono
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${CONTACT.whatsappNumber}`}
                  className="text-tedfu-white/85 hover:text-tedfu-orange"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-tedfu-orange">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-tedfu-white/85 hover:text-tedfu-orange"
                >
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-tedfu-orange">
                Zona de trabajo
              </dt>
              <dd className="mt-1 text-tedfu-white/85">{CONTACT.zone}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3">
          <ContactoForm />
        </div>
      </div>
    </Section>
  );
}
