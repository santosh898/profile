import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Sai Santosh Kottakota - Tech Lead Portfolio",
  description:
    "Experienced Tech Lead specializing in React, Node.js, and modern web technologies",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-6 py-12">
        <header className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Sai Santosh Kottakota
          </h1>
          <nav className="flex space-x-4">
            <TooltipProvider>
              {[
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
            Experienced Tech Lead with expertise in React, React Native,
            Node.js, and modern web technologies. Passionate about creating
            efficient, scalable, and innovative solutions for complex problems.
          </p>
        </section>

        <Tabs defaultValue="experience" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="mt-6">
            <div className="space-y-6">
              {[
                {
                  role: "Senior Software Engineer",
                  company: "Sails software Solutions, Visakhapatnam",
                  period: "08/2022 - Present",
                  responsibilities: [
                    "Architected and developed ElasticSearch and React.JS Powered search component with extensive filtering and export functionalities",
                    "Architected, developed and deployed Angular frontend for a large enterprise",
                    "Spearheading a full UI revamp for a medical scanning equipment, handling complex graphical data",
                  ],
                },
                {
                  role: "Technical Lead",
                  company: "Bikayi (YC S20), Bengaluru",
                  period: "12/2021 - 04/2022",
                  responsibilities: [
                    "Led a tech team to develop new features for an existing e-commerce builder",
                    "Implemented a subscription model for recurring payments",
                    "Developed a multi-vendor platform",
                    "Created an appointment booking system",
                  ],
                },
                {
                  role: "Technical Lead",
                  company: "Sails software Solutions, Visakhapatnam",
                  period: "10/2020 - 12/2021",
                  responsibilities: [
                    "Led the UI team, overseeing all aspects of implementation",
                    "Developed the end-to-end product UI for Loqbox Save",
                    "Led the entire process from ideation to delivery for Loqbox Spend mobile app and back-office finance software",
                  ],
                },
                {
                  role: "Founding Engineer",
                  company: "Veda.ai, Visakhapatnam",
                  period: "05/2018 - 09/2020",
                  responsibilities: [
                    "Engineered and maintained end-to-end technology and architecture",
                    "Led ideation, design, and development of POCs using cutting-edge technologies like Vision AI on the edge and WebRTC",
                    "Designed the overall development strategy for web and mobile applications",
                  ],
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 text-gray-100"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-1 text-lg font-semibold">{job.role}</h3>
                    <p className="mb-2 text-sm text-gray-300">
                      {job.company} | {job.period}
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="projects" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "UI OTG",
                  description:
                    "A Generative AI-based UI framework for real-time data interaction and dynamic component creation from user prompts",
                  link: "#",
                },
                {
                  title: "Kaise Ho?",
                  description:
                    "A better way to know how your friends are doing",
                  link: "#",
                },
                {
                  title: "Typesafe Data Layer",
                  description:
                    "Fullstack type safety by utilising GraphQL as the single source of truth for types",
                  link: "#",
                },
                {
                  title: "GPT with Friends",
                  description:
                    "Browser Extension to chat with your friends over ChatGPT conversations",
                  link: "#",
                },
                {
                  title: "The Light Project",
                  description:
                    "Controlling Devices using Thingsboard and MicroPython",
                  link: "#",
                },
                {
                  title: "Side Notes",
                  description:
                    "Browser Extension that displays notepad on ChatGPT's side",
                  link: "#",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 text-gray-100"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-300">
                      {project.description}
                    </p>
                    <Button asChild variant="secondary">
                      <Link href={project.link}>
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills" className="mt-6">
            <Skills />
          </TabsContent>
        </Tabs>

        <section>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="mb-6 max-w-2xl text-gray-300">
            Interested in collaborating or have a question? Feel free to reach
            out!
          </p>
          <Button asChild>
            <Link href="mailto:me.sai.santosh@email.com">
              Contact Me <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
