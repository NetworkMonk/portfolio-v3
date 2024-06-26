import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";

export default function Achievements() {
  const achievementList = [
    {
      name: "New Development Team",
      description: [
        "I was tasked with building out a complete development and deployment pipeline from scratch. Along with development processes and hiring developers.",
        "A thoroughly enjoyable process that resulted in many successful projects and meeting a lot of great developers and engineers.",
      ],
    },
    {
      name: "Shipping Calculator",
      description: [
        "Created an API that was able to calculate expected shipping costs and find the most cost effective option.",
        "Supporting all carriers for a complex stock profile, no off the shelf solution was viable.",
        "This saved around £1,800 for the business in shipping costs in the first week of use.",
      ],
    },
    {
      name: "Internal Service Monitoring",
      description: [
        "Implemented a solution to monitor all internal, and some key third party, web services. Allowing the business to act immediately in the event of an outage. Reducing downtime to users significantly.",
      ],
    },
    {
      name: "JIRA Integration",
      description: [
        "Implemented JIRA task and project management in the IT team. Allowing the business to better track and making all work visible. Integrated with their teams client and help desk software.",
      ],
    },
    {
      name: "UI Workflow Builder",
      description: [
        "Created a bespoke drag and drop workflow builder for a bespoke in house ERP system.",
        "All required back end services created for this and a dynamic front end that allowed some complex automations inside the system.",
      ],
    },
    {
      name: "Secure Storage Solution",
      description: [
        "A REST API built entirely in Go that the business served as a Saas to clients. Allowed secure storage of files using AES-256 encryption, block level uploads and backups and data de-duplication to maximise storage efficiency.",
      ],
    },
  ];

  return (
    <div id="achievements">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10">
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
                style={{ animationDelay: "0.5s" }}
              >
                Achievements
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "1s" }}
              >
                In addition to all of my public projects above, I have worked on
                many other bespoke applications and business projects.
              </p>
              <div className="grid md:grid-cols-2 gap-10 gap-y-20 mt-10">
                {achievementList.map((achievement, aIndex) => {
                  return (
                    <div
                      key={aIndex}
                      className="in-up-right"
                      style={{ animationDelay: `${aIndex / 2 + 1.5}s` }}
                    >
                      <div>
                        <h4
                          className={`${josefin.className} text-xl font-semibold mb-3 tracking-wide inline-block`}
                        >
                          {achievement.name}
                          <span className="bg-gradient-to-br from-teal-200 to-brand-teal h-1 rounded-full block"></span>
                        </h4>
                      </div>
                      {achievement.description.map((desc, descIndex) => {
                        return (
                          <p
                            key={descIndex}
                            className="mb-3 text-sm text-gray-200"
                          >
                            {desc}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>
        </Container>
      </Section>
    </div>
  );
}
