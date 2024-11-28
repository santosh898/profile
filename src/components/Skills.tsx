"use client";

import { Card, CardContent } from "@/components/ui/card";

import ReactLogo from "@/logos/react.svg";
import ReactNativeLogo from "@/logos/react-native.svg";
import JavascriptLogo from "@/logos/javascript.svg";
import TypescriptLogo from "@/logos/typescript.svg";
import NodejsLogo from "@/logos/nodejs.svg";
import ElectronLogo from "@/logos/electron.svg";
import StyledComponentsLogo from "@/logos/styled-components.svg";
import TailwindLogo from "@/logos/tailwindcss.svg";
import PostgresqlLogo from "@/logos/postgresql.svg";
import GraphqlLogo from "@/logos/graphql.svg";
import VuejsLogo from "@/logos/vuejs.svg";
import SolidjsLogo from "@/logos/solidjs.svg";
import FirebaseLogo from "@/logos/firebase.svg";
import MicroservicesLogo from "@/logos/microservices.svg";
import ReduxLogo from "@/logos/redux.svg";
import VitestLogo from "@/logos/vitest.svg";
import NextjsLogo from "@/logos/nextjs.svg";
import WebextensionsLogo from "@/logos/webextensions.svg";
import WebrtcLogo from "@/logos/webrtc.svg";
import ThingsboardLogo from "@/logos/thingsboard.svg";
import DockerLogo from "@/logos/docker.svg";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const seggregatedSkills = {
  frontend: [
    { name: "React", logo: ReactLogo },
    { name: "React Native", logo: ReactNativeLogo },
    { name: "Javascript", logo: JavascriptLogo },
    { name: "Typescript", logo: TypescriptLogo },
    { name: "Styled Components", logo: StyledComponentsLogo },
    { name: "Tailwind", logo: TailwindLogo },
    { name: "Vue.JS", logo: VuejsLogo },
    { name: "Solid.JS", logo: SolidjsLogo },
    { name: "Redux", logo: ReduxLogo },
    { name: "Next.JS", logo: NextjsLogo },
    { name: "Vitest/Jest", logo: VitestLogo },
  ],
  backend: [
    { name: "Node.JS", logo: NodejsLogo },
    { name: "Postgres", logo: PostgresqlLogo },
    { name: "GraphQL", logo: GraphqlLogo },
    { name: "Firebase", logo: FirebaseLogo },
    { name: "Microservices", logo: MicroservicesLogo },
    { name: "Docker", logo: DockerLogo },
  ],
  misc: [
    { name: "Electron.JS", logo: ElectronLogo },
    { name: "Web Extensions", logo: WebextensionsLogo },
    { name: "WebRTC", logo: WebrtcLogo },
    { name: "Thingsboard", logo: ThingsboardLogo },
  ],
};

const ITEMS_TO_SHOW = 4;

function SkillSection({
  title,
  skills,
  expanded,
  onToggle,
}: {
  title: string;
  skills: typeof seggregatedSkills.frontend;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedSkills = !isMobile
    ? skills
    : expanded
    ? skills
    : skills.slice(0, ITEMS_TO_SHOW);
  const showToggle = skills.length > ITEMS_TO_SHOW && isMobile;

  return (
    <div className="flex-1 min-w-[250px]">
      <h3 className="text-xl font-semibold mb-4 capitalize text-gray-100">
        {title}
      </h3>
      <div className="space-y-2">
        {displayedSkills.map((skill) => (
          <Card
            key={skill.name}
            className="bg-gray-900 border-gray-800 text-gray-100"
          >
            <CardContent className="flex items-center gap-3 p-3">
              <skill.logo className="h-8 w-8 mr-2 fill-current text-white" />
              <span className="text-base font-medium">{skill.name}</span>
            </CardContent>
          </Card>
        ))}
        {showToggle && (
          <Button
            variant="ghost"
            className="w-full mt-2 text-gray-400"
            onClick={onToggle}
          >
            {expanded ? (
              <span className="flex items-center">
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </span>
            ) : (
              <span className="flex items-center">
                Show More <ChevronDown className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

const Skills = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    frontend: false,
    backend: false,
    misc: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {(
        Object.entries(seggregatedSkills) as [
          keyof typeof seggregatedSkills,
          typeof seggregatedSkills.frontend
        ][]
      ).map(([category, skills]) => (
        <SkillSection
          key={category}
          title={category}
          skills={skills}
          expanded={expandedSections[category]}
          onToggle={() => toggleSection(category)}
        />
      ))}
    </div>
  );
};

export default Skills;
