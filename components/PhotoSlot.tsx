export default function PhotoSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`photo-slot ${className}`}>
      <span className="px-4 font-body text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
