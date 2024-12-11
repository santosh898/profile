import { Card, CardContent } from "./ui/card";

const Experience = () => {
  return (
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
        <Card key={index}>
          <CardContent className="p-6">
            <h3 className="mb-1 text-lg font-semibold">{job.role}</h3>
            <p className="mb-2 text-sm">
              {job.company} | {job.period}
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experience;
