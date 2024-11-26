import { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Sai Santosh Kottakota - Tech Lead",
  description:
    "Experienced Tech Lead specializing in React, Node.js, and modern web technologies",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-6 py-12">
        <Header />

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
            <Experience />
          </TabsContent>
          <TabsContent value="projects" className="mt-6">
            <Projects />
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
