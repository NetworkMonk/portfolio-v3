import Nav from "@/components/common/Nav";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import LetsTalk from "@/components/sections/LetsTalk";
import ProfileHeader from "@/components/sections/ProfileHeader";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    name: "James Plant | Portfolio",
    image: "https://jamesplant.me/img/james-plant.png",
    description:
      "An experienced full stack web application developer and technology leader. 20 years in the world of technology. Available for work.",
  };

  return (
    <page>
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#99f6e4" />
          <stop offset="100%" stopColor="#028090" />
        </linearGradient>
      </svg>

      <Nav />
      <ProfileHeader />
      <Testimonials />
      <Projects />
      <Achievements />
      <Technologies />
      <LetsTalk />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </page>
  );
}
