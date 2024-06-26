import Nav from "@/components/common/Nav";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import LetsTalk from "@/components/sections/LetsTalk";
import ProfileHeader from "@/components/sections/ProfileHeader";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
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
      <Projects />
      <Achievements />
      <Technologies />
      <LetsTalk />
      <Footer />
    </page>
  );
}
