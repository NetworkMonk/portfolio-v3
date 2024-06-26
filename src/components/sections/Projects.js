import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      name: "White Stores",
      summary: "Magento 2 Website Build",
      image: "/img/white-stores.png",
      background: "bg-gradient-to-br from-green-300 to-teal-600",
      benefit:
        "To replace a site that was built below standard with a stable platform.",
      technologies: ["Magento 2", "Celigo", "REST APIs", "NetSuite", "Postman"],
      link: "https://whitestores.co.uk",
    },
    {
      name: "036",
      summary: "Square Space Website",
      image: "/img/036.png",
      background: "bg-gradient-to-br from-blue-300 to-cyan-600",
      benefit:
        "To create a website in a day, managing a team of developers to quickly create a landing page for the business.",
      technologies: ["Square Space", "HTML", "CSS"],
      link: "https://www.036.co.uk",
    },
    {
      name: "NOVA Outdoor Living",
      summary: "Square Space Website",
      image: "",
      background: "bg-gradient-to-br from-green-300 to-emerald-600",
      benefit:
        "Another Square Space site to be turned around in short time frame, to include some additional features that required some custom development.",
      technologies: ["Square Space", "HTML", "CSS", "JavaScript"],
      link: "https://www.novaoutdoorliving.co.uk",
    },
    {
      name: "Coder Cave",
      summary: "Shopify E-Commerce Website",
      image: "/img/coder-cave.png",
      background: "bg-gradient-to-br from-orange-300 to-amber-600",
      benefit:
        "Launching a new site for a print-on-demand focused business for a clothing brand that sells clothing and accessories targeting coders and developers.",
      technologies: ["Shopify", "HTML", "CSS", "JavaScript"],
      link: "https://www.codercave.net",
    },
    {
      name: "James Plant Photography",
      summary: "Bespoke Next.js Website",
      image: "/img/james-plant-photography.png",
      background: "bg-gradient-to-br from-gray-300 to-zinc-600",
      benefit:
        "A personal project to celebrate my love for photography. Designed to be heavily animated to focus on the images and reduce the amount of text across the site.",
      technologies: ["React", "Next.js", "Tailwind", "Framer Motion"],
      link: "https://www.jamesplantphotography.co.uk",
    },
    {
      name: "Fluffs and Files",
      summary: "Webflow Website",
      image: "/img/fluffs-and-files.png",
      background: "bg-gradient-to-br from-purple-300 to-violet-600",
      benefit:
        "To create an online presence for a home based beauty therapist and a single source for all service prices.",
      technologies: ["Webflow", "CSS"],
      link: "https://www.fluffsandfiles.co.uk",
    },
    {
      name: "1st Leyton Scouts",
      summary: "Wordpress Website",
      image: "/img/scouts.png",
      background: "bg-gradient-to-br from-cyan-300 to-lime-600",
      benefit:
        "I volunteered to help 1st leyton scouts complete their website that had been partially completed. I worked with the team to get the branding up to standard and get the site launched.",
      technologies: ["Wordpress", "HTML", "CSS"],
      link: "https://1stleytonscouts.co.uk/",
    },
    {
      name: "James Plant",
      summary: "Bespoke Portfolio Website",
      image: "/img/james-plant.png",
      background: "bg-gradient-to-br from-indigo-300 to-slate-600",
      benefit:
        "This site! I needed to update my portfolio to include all recent projects and fully reflect where I am at with my journey with web development and technology.",
      technologies: ["React", "Next.js", "Tailwind", "CSS"],
      link: "https://www.jamesplant.me",
    },
  ];

  return (
    <div id="projects">
      <Section>
        <Container>
          <div className="md:p-10">
            <InView>
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
                style={{ animationDelay: "0.5s" }}
              >
                Projects
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "1s" }}
              >
                Some of the projects I&apos;ve had the pleasure of being a part
                of during my 20 years in technology.
              </p>
            </InView>
            <div className="flex flex-col gap-10 mt-10">
              {projectList.map((project, projectIndex) => {
                return (
                  <div key={projectIndex}>
                    <InView>
                      <div
                        className={`rounded-xl shadow-xl bg-black p-5 flex flex-col md:flex-row in-up-right md:min-h-[400px] relative overflow-hidden ${project.background}`}
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div className="max-w-xl flex flex-col p-3 md:p-10 md:order-2">
                          <h3
                            className={`${josefin.className} text-4xl font-semibold uppercase tracking-wide`}
                          >
                            {project.name}
                          </h3>
                          <p className="opacity-70 text-sm -mt-1 font-semibold tracking-wide uppercase">
                            {project.summary}
                          </p>
                          <h4 className="text-xs font-bold tracking-wider uppercase mt-5">
                            Summary
                          </h4>
                          <p className="text-sm">{project.benefit}</p>
                          <h4 className="text-xs font-bold tracking-wider uppercase mt-5">
                            Technologies Used
                          </h4>
                          <div>
                            {project.technologies.map((tech, techIndex) => {
                              return (
                                <span
                                  key={techIndex}
                                  className="inline-block text-sm mr-3 mb-3"
                                >
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex-1 mt-auto p-3 md:p-10 md:order-1">
                          {project.link && project.link !== "" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-gray-200 bg-opacity-30 text-white rounded px-5 py-3 hover:bg-opacity-50 transition-colors duration-300"
                            >
                              View
                            </a>
                          )}
                        </div>
                        {project.image && project.image !== "" && (
                          <div
                            className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none -z-10"
                            style={{ perspective: "1000px" }}
                          >
                            <Image
                              src={project.image}
                              alt={project.name}
                              width="1000"
                              height="1000"
                              className="object-cover w-full h-full opacity-10"
                              style={{
                                transform:
                                  "rotateX(10deg) rotateY(10deg) scale(1.4)",
                                filter: "blur(1px)",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </InView>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
