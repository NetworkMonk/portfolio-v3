import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";

export default function BlogPost({ params }) {
  const slug = params.slug;
  const jsonLd = {
    "@context": "https://schema.org",
    name: "James Plant | Blog",
    image: "https://jamesplant.me/img/james-plant.png",
    description:
      "Articles and videos that I've created to share with the tech community. These are mainly focused around web technologies and coding.",
  };

  return (
    <page className="flex flex-col min-h-screen">
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

      <Nav currentPage="/blog" />
      <h1>{slug}</h1>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </page>
  );
}
