import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/content/company";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients",
  description: "A list of valued clients we have worked with.",
};

export default function ClientsPage() {
  return (
    <div>
      <section className="border-b bg-secondary/30">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Clients"
            title="Our valued clients"
            description="A selection of organizations we’ve supported across residential, commercial, and infrastructure work."
          />
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.valuedClients.map((c) => (
              <Card key={`${c.name}-${c.logo}`} className="group">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="relative size-14 overflow-hidden rounded-md bg-white ring-1 ring-border">
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    {c.note ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {c.note}
                      </p>
                    ) : (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Client organization
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border bg-secondary/30 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold">Want a reference list?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Contact us for detailed project references and site visit
                coordination.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Contact us <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}



