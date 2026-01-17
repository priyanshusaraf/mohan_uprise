import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({
  name,
  status,
  location,
  description,
  image,
}: {
  name: string;
  status: "Ongoing" | "Completed";
  location?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Card className="h-full overflow-hidden transition-colors hover:bg-secondary/60">
      {image ? (
        <div className="relative aspect-[4/3] w-full bg-secondary">
          <Image
            src={image}
            alt={`${name} project`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      ) : null}
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge variant={status === "Ongoing" ? "default" : "secondary"}>
            {status}
          </Badge>
        </div>
        {location ? (
          <p className="text-xs text-muted-foreground">{location}</p>
        ) : null}
      </CardHeader>
      {description ? (
        <CardContent className="text-sm text-muted-foreground">
          {description}
        </CardContent>
      ) : null}
    </Card>
  );
}



