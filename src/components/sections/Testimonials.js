import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InView from "../animated/InView";
import Container from "../common/Container";
import Section from "../common/Section";
import { josefin } from "@/app/fonts";
import { faCircleUser, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const reviews = [
    {
      author: "James W",
      position: "CEO",
      company: "036 Group Company",
      text: [
        "Having employed and worked with James for the past 3.5 years I can not speak highly enough of him. His personality, quality of work, people skills and genuine care for what he does are exemplary.",
        "He will undoubtedly be an asset to any company and I thoroughly recommend contacting him. James, it has been a pleasure working with you and I know we will stay in touch.",
      ],
    },
    {
      author: "Damian D",
      position: "Group Operations Director",
      company: "036 Group Company",
      text: [
        "Having worked with James Plant from both sides of the fence (Agency & In-House) I cannot recommend him enough for his technical abilities.",
        "If you're in the market for someone with a strong technical background and aptitude at a Senior Level you should check him out!",
        "There is no doubt that James has curated and contributed to many of our robust systems and processes within our group allowing us to grow and evolve as the group has over his time with us.",
      ],
    },
    {
      author: "Mark T",
      position: "COO",
      company: "Cult Furniture",
      text: [
        "James is excellent at what he does and he does it with complete integrity and dedication. A huge opportunity for a business to get someone that will make their business better.",
      ],
    },
  ];

  return (
    <div id="testimonials">
      <Section>
        <Container>
          <div className="md:p-10">
            <InView>
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
                style={{ animationDelay: "0.5s" }}
              >
                Testimonials
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "1s" }}
              >
                I&apos;ve worked with some amazing people throughout my career.
                I&apos;m incredibly grateful for the following recommendations.
              </p>
              <div className="lg:flex flex-wrap -mx-3">
                {reviews.map((review, reviewIndex) => {
                  return (
                    <div key={reviewIndex} className="lg:w-1/3 p-3">
                      <figure
                        className="bg-brand-platinum rounded-lg p-5 bg-opacity-5 h-full flex flex-col in-up"
                        style={{animationDelay: `${reviewIndex / 3 + 2}s`}}
                      >
                        <blockquote className="flex-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="inline-block w-10 h-10 mb-3"
                            fill="url(#my-cool-gradient)"
                          >
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                          </svg>
                          {review.text.map((text, index) => {
                            return (
                              <p key={index} className="text-sm mb-3">
                                {text}
                              </p>
                            );
                          })}
                        </blockquote>
                        <div className="flex mt-5">
                          <div className="">
                            <FontAwesomeIcon
                              icon={faCircleUser}
                              className="inline-block w-8 h-8 mr-3 mt-1"
                            />
                          </div>
                          <div>
                            <p>{review.author}</p>
                            <p className="uppercase text-sm text-gray-400">
                              {review.position} - {review.company}
                            </p>
                          </div>
                        </div>
                      </figure>
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
