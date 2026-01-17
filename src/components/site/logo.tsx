import Link from "next/link";
import Image from "next/image";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3">
      <span className="relative size-14 overflow-hidden rounded-lg bg-white ring-1 ring-border">
        <Image
          src="/mohan-uprise-logo.png"
          alt="Mohan Uprise Pvt Ltd logo"
          fill
          className="object-contain p-2"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-semibold tracking-tight text-foreground">
          Mohan Uprise
        </span>
        <span className="block text-sm text-muted-foreground">Pvt Ltd</span>
      </span>
    </Link>
  );
}


