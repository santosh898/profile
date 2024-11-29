"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
import SolidityLogo from "@/logos/solidity.svg";
import EthersLogo from "@/logos/ethers.svg";
import AlchemyLogo from "@/logos/alchemy.svg";
import HardhatLogo from "@/logos/hardhat.svg";
import InfuraLogo from "@/logos/infura.svg";
import MetamaskLogo from "@/logos/metamask.svg";
import TensorflowLogo from "@/logos/tensorflow.svg";
import PythonLogo from "@/logos/python.svg";
import OpenAILogo from "@/logos/openai.svg";
import OllamaLogo from "@/logos/ollama.svg";
import LanceDBLogo from "@/logos/lancedb.svg";
import PhidataLogo from "@/logos/phidata.svg";

const seggregatedSkills = {
  Frontend: [
    { name: "React", logo: ReactLogo },
    { name: "Typescript", logo: TypescriptLogo },
    { name: "Tailwind", logo: TailwindLogo },
    { name: "Next.JS", logo: NextjsLogo },
    { name: "React Native", logo: ReactNativeLogo },
    { name: "Javascript", logo: JavascriptLogo },
    { name: "Styled Components", logo: StyledComponentsLogo },
    { name: "Vue.JS", logo: VuejsLogo },
    { name: "Solid.JS", logo: SolidjsLogo },
    { name: "Redux", logo: ReduxLogo },
    { name: "Vitest/Jest", logo: VitestLogo },
  ],
  Backend: [
    { name: "Node.JS", logo: NodejsLogo },
    { name: "Postgres", logo: PostgresqlLogo },
    { name: "Firebase", logo: FirebaseLogo },
    { name: "Docker", logo: DockerLogo },
    { name: "GraphQL", logo: GraphqlLogo },
    { name: "Microservices", logo: MicroservicesLogo },
    { name: "Python", logo: PythonLogo },
  ],
  Web3: [
    { name: "Solidity", logo: SolidityLogo },
    { name: "Ethers.JS", logo: EthersLogo },
    { name: "Hardhat", logo: HardhatLogo },
    { name: "Alchemy", logo: AlchemyLogo },
  ],
  AI: [
    {
      name: "OpenAI",
      logo: OpenAILogo,
    },
    { name: "Ollama", logo: OllamaLogo },
    { name: "Phidata", logo: PhidataLogo },
    { name: "LanceDB", logo: LanceDBLogo },
    { name: "Tensorflow.JS", logo: TensorflowLogo },
  ],
  Misc: [
    { name: "Electron.JS", logo: ElectronLogo },
    { name: "Web Extensions", logo: WebextensionsLogo },
    { name: "WebRTC", logo: WebrtcLogo },
    { name: "Metamask", logo: MetamaskLogo },
    { name: "Thingsboard", logo: ThingsboardLogo },
    { name: "Infura", logo: InfuraLogo },
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
  skills: typeof seggregatedSkills.Frontend;
  expanded: boolean;
  onToggle: () => void;
}) {
  const displayedSkills = expanded ? skills : skills.slice(0, ITEMS_TO_SHOW);
  const showToggle = skills.length > ITEMS_TO_SHOW;

  return (
    <div className="flex-1 min-w-[250px]">
      <h3 className="text-xl font-semibold mb-4 text-gray-100">{title}</h3>
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
          typeof seggregatedSkills.Frontend
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
