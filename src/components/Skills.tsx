import { Card, CardContent } from "@/components/ui/card";

// Import SVGs
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

const skills = [
  { name: "React", logo: ReactLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "Javascript", logo: JavascriptLogo },
  { name: "Typescript", logo: TypescriptLogo },
  { name: "Node.JS", logo: NodejsLogo },
  { name: "Electron.JS", logo: ElectronLogo },
  { name: "Styled Components", logo: StyledComponentsLogo },
  { name: "Tailwind", logo: TailwindLogo },
  { name: "Postgres", logo: PostgresqlLogo },
  { name: "GraphQL", logo: GraphqlLogo },
  { name: "Vue.JS", logo: VuejsLogo },
  { name: "Solid.JS", logo: SolidjsLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Microservices", logo: MicroservicesLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Vitest/Jest", logo: VitestLogo },
  { name: "Next.JS", logo: NextjsLogo },
  { name: "Web Extensions", logo: WebextensionsLogo },
  { name: "WebRTC", logo: WebrtcLogo },
  { name: "Thingsboard", logo: ThingsboardLogo },
  { name: "Docker", logo: DockerLogo },
];

console.log(DockerLogo);

const Skills = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <Card key={index} className="bg-gray-900 border-gray-800 text-gray-100">
          <CardContent className="flex items-center justify-center p-6">
            <skill.logo className="h-8 w-8 mr-2 fill-current text-white" />
            <span className="text-lg font-medium">{skill.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
