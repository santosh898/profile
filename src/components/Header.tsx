import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <header className="mb-6 flex flex-col sm:flex-row sm:items-start items-center justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
            Sai Santosh Kottakota
          </h1>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Tech Lead
          </h2>
        </div>

        <nav className="flex space-x-4 mt-4 sm:mt-0">
          <TooltipProvider>
            {[
              {
                icon: PhoneCall,
                label: "Phone",
                href: "tel:+919985094687",
              },
              {
                icon: Mail,
                label: "Email",
                href: "mailto:me.sai.santosh@gmail.com",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/santosh898",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/santosh898",
              },
            ].map(({ icon: Icon, label, href }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary hover:text-primary-foreground"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </header>

      <section className="mb-12 max-sm:text-center">
        <p className="max-w-2xl">
          Experienced Tech Lead with expertise in modern web technologies, Web3,
          and AI. Skilled in developing efficient, scalable, and innovative
          solutions using cutting edge tech.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link
            href="/Sai_Santosh_Kottakota_Resume.pdf"
            target="_blank"
          >
            <Download className="h-4 w-4 mr-2" />
            Resume
          </Link>
        </Button>
      </section>
    </>
  );
};

export default Header;
