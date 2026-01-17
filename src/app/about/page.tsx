import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company profile, leadership team, and consultants.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b bg-secondary/30">
        <Container className="py-12">
          <SectionHeading
            eyebrow="About Us"
            title="Company profile"
            description="A construction partner focused on quality, safety, transparency, and on-time delivery."
          />
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              {company.about.map((p) => (
                <p key={p} className="text-pretty text-sm text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">What we stand for</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Integrity</Badge>
                  <Badge variant="secondary">Technical expertise</Badge>
                  <Badge variant="secondary">Customer satisfaction</Badge>
                  <Badge variant="secondary">Safety</Badge>
                  <Badge variant="secondary">Quality control</Badge>
                  <Badge variant="secondary">On-time delivery</Badge>
                </div>
                <Separator />
                <p className="text-pretty">
                  We work collaboratively with clients and consultants—from
                  conceptualization to handover—to deliver customized solutions
                  aligned to modern standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-b bg-secondary/30">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Our Team"
            title="Leadership"
            description="Experienced, hands-on leadership with a focus on execution excellence."
          />
          <div className="mt-8 space-y-4">
            {company.team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
                  <div className="relative w-full bg-secondary md:w-56">
                    <div className="relative aspect-[4/3] md:h-full md:aspect-auto">
                      <Image
                        src={member.image ?? "/placeholder-hero.svg"}
                        alt={`${member.name} portrait`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardHeader className="space-y-2 pb-2">
                      <CardTitle className="text-base">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      {member.bio.map((b) => (
                        <p key={b} className="text-pretty">
                          {b}
                        </p>
                      ))}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/20">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Consultants"
            title="Our valuable consultants"
            description="Structural and architectural consultants associated with our work."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card className="h-full bg-card/80">
              <CardHeader>
                <CardTitle className="text-base">
                  Structural consultants
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {company.consultants.structural.length} partners
                </p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {company.consultants.structural.map((c) => (
                  <Badge key={c} variant="secondary">
                    {c}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="h-full bg-card/80">
              <CardHeader>
                <CardTitle className="text-base">
                  Architectural consultants
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {company.consultants.architectural.length} partners
                </p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {company.consultants.architectural.map((c) => (
                  <Badge key={c} variant="secondary">
                    {c}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
          <Separator className="mt-8" />
          <p className="mt-4 text-sm text-muted-foreground">
            We collaborate closely with consultants to ensure compliance, safety
            standards, and high-performing project outcomes.
          </p>
        </Container>
      </section>
    </div>
  );
}



