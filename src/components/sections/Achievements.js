import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";

const getAchievements = async () => {
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
          achievements {
            displayOrder
            name
            description
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return data.achievements;
};

export default async function Achievements() {
  const achievementList = await getAchievements();

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
                {achievementList
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map((achievement, aIndex) => {
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
                        {achievement.description
                          .split(/\n{1,}/g)
                          .map((desc, descIndex) => {
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
