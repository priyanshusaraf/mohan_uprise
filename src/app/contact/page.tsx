import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { MapEmbed } from "@/components/site/map-embed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohan Uprise Pvt Ltd.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b bg-secondary/30">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk"
            description="Share your project scope and timeline. We’ll respond with next steps."
          />
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <ContactForm />
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Contact details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a className="hover:underline" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Phone:</span>{" "}
                    <a className="hover:underline" href={`tel:${company.phone}`}>
                      {company.phone}
                    </a>
                  </p>
                  <Separator />
                  <p className="text-pretty">
                    <span className="font-medium text-foreground">Address:</span>{" "}
                    {company.address.line1}, {company.address.line2},{" "}
                    {company.address.city} {company.address.postalCode}
                  </p>
                </CardContent>
              </Card>

              <MapEmbed
                query={`${company.address.line1}, ${company.address.city} ${company.address.postalCode}`}
                title="Office map"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}



