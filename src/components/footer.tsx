import Link from "next/link";
import { SewingPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <SewingPin className="h-6 w-6 text-primary" />
            <span className="text-lg font-headline font-bold text-foreground">StitchPerfect</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StitchPerfect. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
