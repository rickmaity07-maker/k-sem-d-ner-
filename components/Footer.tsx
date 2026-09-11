import Link from "next/link";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-page grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl italic text-saffron">
            {business.name}
          </h3>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            {business.tagline}
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-sm transition-colors hover:border-saffron hover:text-saffron"
            >
              IG
            </a>
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-sm transition-colors hover:border-saffron hover:text-saffron"
            >
              FB
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-saffron/90">
            Adresse
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            {business.address.street}
            <br />
            {business.address.zipCity}
          </p>
          <a
            href={business.phoneHref}
            className="mt-3 inline-block text-sm text-cream/80 hover:text-saffron"
          >
            {business.phone}
          </a>
          <br />
          <a
            href={`mailto:${business.email}`}
            className="mt-1 inline-block text-sm text-cream/80 hover:text-saffron"
          >
            {business.email}
          </a>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-saffron/90">
            Öffnungszeiten
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span className={h.time === "Geschlossen" ? "text-cream/50" : ""}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-saffron">
              Kontakt
            </Link>
            <Link href="/menu" className="hover:text-saffron">
              Speisekarte
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
