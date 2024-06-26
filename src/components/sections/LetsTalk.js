import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function LetsTalk() {
  const contactOptions = [
    {
      label: "+44 7545 960 983",
      link: "https://wa.me/447545960983",
      icon: faWhatsapp,
    },
    { label: "+44 7545 960 983", link: "tel:447545960983", icon: faPhone },
    {
      label: "jamesplant@gmail.com",
      link: "mailto:jamesplant@gmail.com",
      icon: faEnvelope,
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/james-plant-7ab317b/",
      icon: faLinkedin,
    },
  ];

  return (
    <Section>
      <Container>
        <div id="lets-talk">
          <InView>
            <div className="md:p-10">
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
                style={{ animationDelay: "0.5s" }}
              >
                Let&apos;s Talk
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "1s" }}
              >
                Let&apos;s discuss your next project! You can reach me using any
                of the methods below.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 w-auto max-w-xl">
                {contactOptions.map((contact, index) => {
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      rel="noreferrer"
                      className="rounded-lg p-5 bg-brand-platinum bg-opacity-15 hover:bg-opacity-100 hover:text-brand-black transition-all duration-300 in-up"
                      style={{ animationDelay: `${index / 4 + 2}s` }}
                    >
                      <FontAwesomeIcon
                        icon={contact.icon}
                        className="h-6 w-6 inline-block mr-3 -mt-1"
                      />
                      {contact.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </InView>
        </div>
      </Container>
    </Section>
  );
}
