import Link from "next/link";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="pt-2">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}



