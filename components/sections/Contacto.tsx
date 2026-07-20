import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsappUrl, CONTACT, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { ContactoForm } from "./ContactoForm";

const CANALES = [
  {
    titulo: "Presupuestos de obra",
    detalle: "WhatsApp directo con Lino, que atiende personalmente cada consulta.",
    link: { href: buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE), label: CONTACT.phoneDisplay },
    externo: true,
  },
  {
    titulo: "Licitaciones y proveedores",
    detalle: "Consultas institucionales, pliegos y documentación.",
    link: { href: `mailto:${CONTACT.email}`, label: CONTACT.email },
    externo: false,
  },
  {
    titulo: "Zona de trabajo",
    detalle: CONTACT.zone,
    link: null,
    externo: false,
  },
];

export function Contacto() {
  return (
    <Section id="contacto" background="dark" className="blueprint-grid">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Hablemos"
            title="Contanos tu proyecto"
            description="Completá el formulario y tu consulta le llega directo al WhatsApp de Lino. Sin intermediarios ni casillas que nadie lee."
            light
          />
          <dl className="mt-10 space-y-6">
            {CANALES.map((canal) => (
              <div key={canal.titulo} className="border-l-2 border-tedfu-orange pl-4">
                <dt className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-tedfu-orange">
                  {canal.titulo}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-tedfu-white/80">
                  {canal.detalle}
                  {canal.link && (
                    <>
                      <br />
                      <a
                        href={canal.link.href}
                        {...(canal.externo
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-medium text-tedfu-white underline decoration-tedfu-orange/50 underline-offset-4 hover:text-tedfu-orange"
                      >
                        {canal.link.label}
                      </a>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-3">
          <ContactoForm />
        </div>
      </div>
    </Section>
  );
}
