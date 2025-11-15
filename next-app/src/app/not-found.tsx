import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-heading font-bold text-gradient-primary">404</h1>
          <p className="mb-4 text-2xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-8 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link href="/treatments">View Treatments</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

