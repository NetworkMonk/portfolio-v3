import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InView from "../animated/InView";
import Container from "../common/Container";
import Section from "../common/Section";
import { josefin } from "@/app/fonts";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const getTestimonials = async () => {
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
          testimonials {
            id
            position
            company
            content
            publishedAt
            author
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return data.testimonials;
};

export default async function Testimonials() {
  const reviews = await getTestimonials();

  return (
    <div id="testimonials">
      <Section>
        <Container>
          <div className="md:p-10">
            <InView>
              <h2
                className={`${josefin.className} text-3xl tracking-wider in-up-right`}
              >
                Testimonials
              </h2>
              <p
                className="my-5 text-sm in-up-right text-gray-400"
                style={{ animationDelay: "0.25s" }}
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
                        style={{ animationDelay: `${reviewIndex / 6 + 0.5}s` }}
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
                          {review.content.split(/\n/g).map((text, index) => {
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
                            <p className="text-xs text-gray-400 font-medium">
                              {review.position}
                              {review.company && review.company !== "" && (
                                <>{` - ${review.company}`}</>
                              )}
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
