import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";
import Image from "next/image";

const getProjects = async () => {
  const response = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/cly38j74i00f307w7tb295z6r/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
      body: JSON.stringify({
        query: `{
          projects(first: 50) {
            displayOrder
            name
            subtitle
            background
            technologies
            link
            image {
              url
            }
            summary
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return data.projects;
};

export default async function Projects() {
  const backgrounds = {
    "green-teal": "bg-gradient-to-br from-green-300 to-teal-600",
    "blue-cyan": "bg-gradient-to-br from-blue-300 to-cyan-600",
    "green-emerald": "bg-gradient-to-br from-green-300 to-emerald-600",
    "orange-amber": "bg-gradient-to-br from-orange-300 to-amber-600",
    "gray-zinc": "bg-gradient-to-br from-gray-300 to-zinc-600",
    "purple-violet": "bg-gradient-to-br from-purple-300 to-violet-600",
    "cyan-lime": "bg-gradient-to-br from-cyan-300 to-lime-600",
    "indigo-slate": "bg-gradient-to-br from-indigo-300 to-slate-600",
    "red-rose": "bg-gradient-to-br from-red-300 to-rose-600",
  };

  const projects = await getProjects();

  return (
    <div id="projects">
      <Section>
        <Container>
          <div className="md:p-10">
            <InView>
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
              >
                Projects
              </h2>
              <p className="my-5 text-sm in-up-right text-gray-400">
                Some of the projects I&apos;ve had the pleasure of being a part
                of during my 20 years in technology.
              </p>
              <div className="grid md:grid-cols-2 gap-10 mt-10">
                {projects
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map((project, projectIndex) => {
                    const backgroundGradient = Object.keys(backgrounds).find(
                      (backgroundKey) => backgroundKey === project.background
                    );
                    return (
                      <div key={projectIndex} className="h-full flex flex-col">
                        <div
                          className={`rounded-xl shadow-xl h-full bg-black p-5 flex flex-col in-up-right md:min-h-[400px] relative overflow-hidden ${
                            backgrounds[backgroundGradient]
                              ? backgrounds[backgroundGradient]
                              : backgrounds["green-teal"]
                          }`}
                        >
                          <div className="max-w-xl flex flex-col p-3 md:p-10">
                            <h3
                              className={`${josefin.className} text-4xl font-semibold uppercase tracking-wide`}
                            >
                              {project.name}
                            </h3>
                            <p className="opacity-70 text-sm -mt-1 font-semibold tracking-wide uppercase">
                              {project.subtitle}
                            </p>
                            <h4 className="text-xs font-bold tracking-wider uppercase mt-5">
                              Summary
                            </h4>
                            <p className="text-sm">{project.summary}</p>
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
                          <div className="flex-1 mt-auto p-3 md:p-10">
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
                          {project.image?.url && project.image.url !== "" && (
                            <div
                              className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none -z-10"
                              style={{ perspective: "1000px" }}
                            >
                              <Image
                                src={project.image.url}
                                alt={project.name}
                                width="1200"
                                height="720"
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
                      </div>
                    );
                  })}
              </div>
            </InView>
          </div>
        </Container>
      </Section>
    </div>
  );
}
