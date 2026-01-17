import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { MapEmbed } from "@/components/site/map-embed";
import { ContactForm } from "@/components/site/contact-form";
import { ProjectCard } from "@/components/site/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { company } from "@/content/company";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-accent/40">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Construction • Real Estate</Badge>
              <Badge variant="secondary">Kolkata</Badge>
            </div>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-5xl">
              Building durable, value-driven spaces with integrity and
              precision.
            </h1>
            <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">
              {company.name} executes residential, commercial, and
              infrastructural projects with a strong focus on quality, safety,
              transparency, and on-time delivery.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/projects">
                  Explore projects <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:${company.phone}`}>
                  <PhoneCall className="mr-2 size-4" />
                  Call {company.phone}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={`mailto:${company.email}`}>
                  <Mail className="mr-2 size-4" />
                  Email us
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border bg-card shadow-sm">
              <div className="p-3 sm:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src="/Ongoing/Greenfield City Phase 2.jpg"
                    alt="Featured project site"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <Separator />
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">Quality</p>
                    <p className="mt-1 text-sm font-semibold">
                      Strict controls
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">Safety</p>
                    <p className="mt-1 text-sm font-semibold">
                      Site protocols
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">Delivery</p>
                    <p className="mt-1 text-sm font-semibold">On time</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-secondary/30">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end execution with a quality-first approach"
            description="A practical, disciplined workflow—from planning to handover—backed by skilled teams and proven controls."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Note: A dedicated Services page is on hold for now; the service
            overview is maintained here on the Home page.
          </p>
        </Container>
      </section>

      {/* Company information */}
      <section className="border-t bg-secondary/30">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Company"
                title="Trusted execution built on transparency"
                description="We focus on clear communication, ethical practices, and consistent workmanship."
              />
              <div className="space-y-3 text-sm text-muted-foreground">
                {company.about.slice(0, 2).map((p) => (
                  <p key={p} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Integrity</Badge>
                <Badge variant="secondary">Technical expertise</Badge>
                <Badge variant="secondary">Customer satisfaction</Badge>
                <Badge variant="secondary">Safety & quality control</Badge>
              </div>
              <div className="pt-2">
                <Button variant="outline" asChild>
                  <Link href="/about">
                    Read our profile <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] bg-secondary">
                  <Image
                    src="/Completed/Shantikunj.jpeg"
                    alt="Company project highlight"
                    fill
                    className="object-cover"
                  />
                </div>
                <Separator />
                <div className="p-6">
                  <p className="text-sm font-semibold">Office details</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Address:
                      </span>{" "}
                      {company.address.line1}, {company.address.line2},{" "}
                      {company.address.city} {company.address.postalCode}
                    </p>
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
                  </div>
                </div>
                <Separator />
                <div className="p-6">
                  <p className="text-sm font-semibold">Working hours</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Monday to Saturday • 10:30 AM – 7:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t">
        <Container className="py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Ongoing & completed work"
              description="A portfolio view for quick discovery. For detailed references, please contact us."
            />
            <Button asChild>
              <Link href="/projects">
                Discover more <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="ongoing" className="mt-8">
            <TabsList>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="ongoing" className="mt-6">
              {company.projects.ongoing.length ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {company.projects.ongoing.map((p) => (
                    <ProjectCard
                      key={p.name}
                      name={p.name}
                      status="Ongoing"
                      location={p.location}
                      description={p.description}
                      image={p.image}
                    />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-sm text-muted-foreground">
                    {company.projects.note}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              {company.projects.completed.length ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {company.projects.completed.map((p) => (
                    <ProjectCard
                      key={p.name}
                      name={p.name}
                      status="Completed"
                      location={p.location}
                      description={p.description}
                      image={p.image}
                    />
                  ))}
        </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-sm text-muted-foreground">
                    {company.projects.note}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      {/* Clients */}
      <section id="clients" className="border-t bg-secondary/30">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Clients"
            title="Valued relationships with leading developers"
            description="A selection of organizations we’ve worked with."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {company.valuedClients.map((c) => (
              <Card key={`${c.name}-${c.logo}`} className="group">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="relative size-12 overflow-hidden rounded-md bg-white ring-1 ring-border">
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
                      <p className="text-xs text-muted-foreground">{c.note}</p>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="outline" asChild>
              <Link href="/clients">
                View all clients <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Contact + Map */}
      <section id="contact" className="border-t bg-secondary/20">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Tell us about your project"
                description="Share your scope, timeline, and location—our team will respond with next steps."
              />
              <ContactForm />
            </div>
            <div className="space-y-4">
              <SectionHeading
                title="Visit our office"
                description={`${company.address.line1}, ${company.address.line2}, ${company.address.city} ${company.address.postalCode}`}
              />
              <MapEmbed
                query={`${company.address.line1}, ${company.address.city} ${company.address.postalCode}`}
              />
              <p className="text-xs text-muted-foreground">
                Tip: If the map doesn’t load due to network restrictions, search
                the address in Google Maps.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
