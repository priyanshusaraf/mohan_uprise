import Link from "next/link";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { Separator } from "@/components/ui/separator";
import { company } from "@/content/company";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              High-quality, durable, and cost-efficient construction—delivered
              with integrity, technical expertise, and customer satisfaction.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  className="hover:underline"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                <a className="hover:underline" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </p>
              <p className="text-pretty">
                <span className="font-medium text-foreground">Office:</span>{" "}
                {company.address.line1}, {company.address.city}{" "}
                {company.address.postalCode}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Quick links</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link className="hover:underline" href="/about">
                About Us
              </Link>
              <Link className="hover:underline" href="/clients">
                Clients
              </Link>
              <Link className="hover:underline" href="/projects">
                Projects
              </Link>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Built with Next.js + shadcn/ui.</p>
        </div>
      </Container>
    </footer>
  );
}



