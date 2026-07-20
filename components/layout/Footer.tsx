import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS, SITE_SLOGAN } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tedfu-dark text-tedfu-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-tedfu-white/70">{SITE_SLOGAN}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-tedfu-orange">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-tedfu-white/80 transition-colors hover:text-tedfu-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-tedfu-orange">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-tedfu-white/80">
              <li>
                <a href={`tel:${CONTACT.whatsappNumber}`} className="hover:text-tedfu-orange">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-tedfu-orange">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.zone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-tedfu-white/10 pt-6 text-center text-xs text-tedfu-white/60">
          © {year} TEDFU S.R.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
