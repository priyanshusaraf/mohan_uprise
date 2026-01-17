import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { MapEmbed } from "@/components/site/map-embed";
import { ProjectCard } from "@/components/site/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Projects",
  description: "Ongoing and completed projects overview.",
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="border-b bg-secondary/30">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Projects"
            title="Ongoing & completed projects"
            description="A high-level view of our work. Please contact us for detailed project references."
          />
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-12">
          <Tabs defaultValue="ongoing">
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

      <section>
        <Container className="py-12">
          <SectionHeading
            title="Office location"
            description="For meetings and coordination, please visit our office."
          />
          <div className="mt-6">
            <MapEmbed
              query={`${company.address.line1}, ${company.address.city} ${company.address.postalCode}`}
              title="Office location map"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}



