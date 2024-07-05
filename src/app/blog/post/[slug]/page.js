import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";

const getBlogPost = async (slug) => {
  const response = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/cly38j74i00f307w7tb295z6r/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // next: { revalidate: 3600 },
      body: JSON.stringify({
        query: `{
          blogPost(where: {slug: "${slug}"}) {
            name
            publishDate
            slug
            summary
            displayStyle
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return data.blogPost ? data.blogPost : false;
};

export default async function BlogPost({ params }) {
  const slug = params.slug;
  const blogPost = await getBlogPost(slug);
  console.log(blogPost);
  if (!blogPost) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    name: "James Plant | Blog",
    image: "https://jamesplant.me/img/james-plant.png",
    description:
      "Articles and videos that I've created to share with the tech community. These are mainly focused around web technologies and coding.",
  };

  return (
    <main className="flex flex-col min-h-screen">
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
      <h1>{blogPost.slug}</h1>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
