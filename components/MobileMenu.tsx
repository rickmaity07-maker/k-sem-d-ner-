"use client";

import Link from "next/link";
import { business } from "@/data/business";

type Link_ = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  links,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  links: Link_[];
  pathname: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-72 flex-col bg-crimson-dark px-6 py-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-lg italic text-cream">
            {business.name}
          </span>
          <button
            aria-label="Menü schließen"
            onClick={onClose}
            className="p-2 text-cream"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-display text-2xl italic ${
                pathname === link.href ? "text-saffron" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={business.phoneHref}
          className="rounded-sm bg-saffron px-4 py-3 text-center font-body font-semibold text-ink"
        >
          {business.phone}
        </a>
      </div>
    </div>
  );
}
