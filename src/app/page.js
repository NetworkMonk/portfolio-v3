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
    name: "James Plant | UK-Based Freelance Shopify, E-Commerce & Bespoke Web Application Developer",
    image: "https://jamesplant.me/img/james-plant.png",
    description:
      "UK-based freelance developer with 20+ years of experience building Shopify stores, e-commerce solutions, and bespoke web applications. Expert in Next.js, React, and modern web technologies, delivering tailored solutions for businesses.",
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
