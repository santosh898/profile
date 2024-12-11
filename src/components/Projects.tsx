import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "Linkbender",
    description:
      "A RAG Agent based application to chat over all the links you save from the web.",
    github: "https://github.com/santosh898/linkbender",
    demo: "https://linkbender.vercel.app/",
    underDevelopment: true,
  },
  {
    title: "UI OTG",
    description:
      "A Generative AI-based UI framework for real-time data interaction and dynamic component creation from user prompts",
    explainer: "https://youtu.be/u7h6lMfTuzM",
  },
  {
    title: "Typesafe Data Layer",
    description:
      "Fullstack type safety by utilising GraphQL as the single source of truth for types",
    github: "https://github.com/santosh898/typesafe-graphql",
    explainer: "https://youtu.be/0E5VtmZig90",
  },
  {
    title: "GPT with Friends",
    description:
      "Browser Extension to chat with your friends over ChatGPT conversations",
    explainer: "https://youtu.be/2RSKDraJoaI",
  },
  {
    title: "The Light Project",
    description: "Controlling Devices using Thingsboard and MicroPython",
    github: "https://github.com/santosh898/thelightproject",
    explainer: "https://youtu.be/PhOGF6qlicc",
  },
  {
    title: "Side Notes",
    description: "Browser Extension that displays notepad on ChatGPT's side",
    extension:
      "https://chromewebstore.google.com/detail/sidenotes/cigckffjdllglonilacoipobihdlgcld",
  },
  {
    title: "ArthBhumi",
    description:
      "Gen AI powered, Decentralized global p2p trade ecosystem with eBL & Commodity tokenization, trade financing and supply chain tracking.",
    underDevelopment: true,
  },
  {
    title: "Basics",
    description:
      "Basics DAO aimed at making essential resources accessible to homeless and under-served communities.",
    underDevelopment: true,
  },
  {
    title: "Git Ranker",
    description:
      "An LLM Based tool to rates and provides issues on your GitHub repositories",
    github: "https://github.com/santosh898/git-ranker",
    underDevelopment: true,
  },
];

const Projects = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 bg-card border-card">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col bg-background rounded-none shadow-none"
        >
          <CardContent className="p-6 flex-1 relative">
            <div className="flex justify-start items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.underDevelopment && (
                <span className="px-2 py-1 text-xs font-semibold bg-primary rounded-full">
                  Under Development
                </span>
              )}
            </div>
            <p className="mb-4 text-sm">{project.description}</p>
            {project.github && (
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="absolute top-2 right-2"
              >
                <Link href={project.github} target="_blank">
                  <Github />
                </Link>
              </Button>
            )}
          </CardContent>
          <CardFooter>
            {project.demo && (
              <Button asChild variant="secondary">
                <Link href={project.demo} target="_blank">
                  Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.explainer && (
              <Button asChild variant="secondary">
                <Link href={project.explainer} target="_blank">
                  Explainer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.extension && (
              <Button asChild variant="secondary">
                <Link href={project.extension} target="_blank">
                  Extension <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
