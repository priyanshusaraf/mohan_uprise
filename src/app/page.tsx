import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { ServiceCard } from "@/components/site/service-card";
import { MapEmbed } from "@/components/site/map-embed";
import { ContactForm } from "@/components/site/contact-form";
import { ProjectCard } from "@/components/site/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { company } from "@/content/company";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const heroSlides = [
    "/Ongoing/Aqua Waves.jpg",
    "/Ongoing/Greenfield City Phase 2.jpg",
    "/Ongoing/Natural City Madhyamgram.jpg",
    "/Completed/Natural City Birati.jpg",
  ].map((src) => encodeURI(src));

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden bg-slate-950 text-white">
        <div className="hero-slider">
          {heroSlides.map((src, index) => (
            <div
              key={src}
              className="hero-slide"
              style={{
                backgroundImage: `url("${src}")`,
                animationDelay: `${index * 6}s`,
                animationDuration: `${heroSlides.length * 6}s`,
              }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <Container className="relative z-10 grid gap-10 py-20 lg:py-28">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-white/15 text-white hover:bg-white/20">
                Construction • Real Estate
              </Badge>
              <Badge className="bg-white/15 text-white hover:bg-white/20">
                Kolkata
              </Badge>
            </div>
            <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Building durable, value-driven spaces with integrity and
              precision.
            </h1>
            <p className="max-w-2xl text-pretty text-white/80 sm:text-lg">
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
              <Button
                variant="outline"
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href={`tel:${company.phone}`}>
                  <PhoneCall className="mr-2 size-4" />
                  Call {company.phone}
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href={`mailto:${company.email}`}>
                  <Mail className="mr-2 size-4" />
                  Email us
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Company information */}
      <section className="border-t bg-secondary/30">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium tracking-wide text-primary">
                  Company
                </p>
                <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Trusted execution built on transparency
                </h2>
                <p className="max-w-2xl text-pretty text-muted-foreground">
                  We focus on clear communication, ethical practices, and
                  consistent workmanship.
                </p>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
                {company.about.slice(0, 3).map((p) => (
                  <p key={p} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Integrity</Badge>
                <Badge variant="secondary">Technical expertise</Badge>
                <Badge variant="secondary">Customer satisfaction</Badge>
                <Badge variant="secondary">Safety & quality control</Badge>
              </div>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/about">
                    Read our profile <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-white p-10 shadow-sm">
              <div className="relative w-64 max-w-full sm:w-72 lg:w-80">
                <div className="relative aspect-square">
                  <Image
                    src="/mohan-uprise-logo.png"
                    alt="Mohan Uprise logo"
                    fill
                    className="object-contain"
                  />
                </div>
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
