import { cn } from "@/lib/utils";

export function MapEmbed({
  className,
  query,
  title = "Google Map",
}: {
  className?: string;
  query: string;
  title?: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed`;

  return (
    <div className={cn("overflow-hidden rounded-lg border bg-card", className)}>
      <iframe
        title={title}
        src={src}
        className="h-[360px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}



