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
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Sai Santosh Kottakota
        </h1>
        <nav className="flex space-x-4">
          <TooltipProvider>
            {[
              {
                icon: PhoneCall,
                label: "Phone",
                href: "tel:+919985094687",
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
              {
                icon: Mail,
                label: "Email",
                href: "mailto:me.sai.santosh@email.com",
              },
            ].map(({ icon: Icon, label, href }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-gray-300"
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

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Tech Lead
        </h2>
        <p className="max-w-2xl text-gray-300">
          Experienced Tech Lead with expertise in modern web technologies.
          Passionate about creating efficient, scalable, and innovative
          solutions for complex problems.
        </p>
        <Button asChild variant="secondary" className="mt-4">
          <Link
            href="/Sai_Santosh_Kottakota_Resume.pdf"
            target="_blank"
            download
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
