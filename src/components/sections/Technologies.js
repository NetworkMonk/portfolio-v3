import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";

export default function Technologies() {
  const skillsList = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Framer Motion",
    "Bootstrap",
    "Electron",
    "Python",
    "PHP",
    "Laravel",
    "Docker",
    "MySQL",
    "HTML",
    "CSS",
    "Sass",
    "CI/CD",
    "NetSuite",
    "Suite Script",
    "Celigo",
    "REST API",
    "Postman",
    "Webflow",
    "Squarespace",
    "WordPress",
    "Shopify",
    "Magento",
    "C#",
    "Unity",
    "Go",
  ];

  return (
    <div id="technologies">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10">
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
                style={{ animationDelay: "0.5s" }}
              >
                Technologies
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "1s" }}
              >
                I have experience working with all the following technologies.
                <br />
                If a technology isn&apos;t explicitly listed here, it
                doesn&apos;t mean I don&apos;t work with it. There&apos;s just
                too much to list in a meaningful way!
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                {skillsList.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-brand-platinum bg-opacity-15 hover:bg-opacity-100 text-gray-100 hover:text-gray-900 rounded p-3 text-sm font-medium tracking-widest cursor-default transition-colors duration-300 group in-up"
                      style={{ animationDelay: `${index / 6 + 2}s` }}
                    >
                      <span className="inline-block rounded-full h-2.5 w-2.5 mr-2.5 bg-teal-400 group-hover:bg-brand-orange transition-colors duration-300"></span>
                      {skill}
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
