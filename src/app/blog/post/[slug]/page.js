import Container from "@/components/common/Container";
import Nav from "@/components/common/Nav";
import Section from "@/components/common/Section";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import { josefin } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Suspense } from "react";
import YouTubeEmbed from "@/components/common/YouTubeEmbed";

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
            thumbnailImage {
              url
            }
            postContent {
              html
            }
            youTubeEmbed
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
      <Section>
        <Container>
          <div className="md:p-10">
            <div className="mb-5 md:mb-10">
              <Link
                type="a"
                href="/blog"
                className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-300"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="inline-block w-3.5 h-3.5 mr-2"
                />
                Back to blog
              </Link>
            </div>
            <h1 className={`${josefin.className} text-3xl tracking-wider`}>
              {blogPost.name}
            </h1>
            <p className="text-sm text-gray-400">
              {new Date(blogPost.publishDate).toLocaleDateString()}
            </p>
            {blogPost?.postContent?.html && (
              <div
                className="my-10 blog-post p-10 bg-brand-platinum bg-opacity-10 text-gray-50 rounded-lg"
                dangerouslySetInnerHTML={{
                  __html: blogPost?.postContent?.html,
                }}
              ></div>
            )}
            {blogPost?.youTubeEmbed && (
              <div className="youtube-wrapper">
                <Suspense fallback={<p>Loading video...</p>}>
                  <YouTubeEmbed src={blogPost.youTubeEmbed} />
                </Suspense>
              </div>
            )}
          </div>
        </Container>
      </Section>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
