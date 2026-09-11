import type { MenuItem } from "@/data/business";

export default function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-3">
      <div className="leader-row">
        <span className="font-display text-lg font-semibold text-ink">
          {item.name}
        </span>
        <span className="leader-fill" aria-hidden="true" />
        <span className="font-display text-lg font-semibold text-crimson">
          {item.price}
        </span>
      </div>
      <p className="mt-0.5 text-sm text-ink/60">{item.description}</p>
    </div>
  );
}
