import Container from "@/components/common/Container";
import Nav from "@/components/common/Nav";
import Section from "@/components/common/Section";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import { josefin } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
            id
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

const getSiblingPost = async (id, direction) => {
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
          blogPosts(${direction < 0 ? "before" : "after"}: "${id}", ${
          direction < 0 ? "last" : "first"
        }: 1) {
            name
            slug
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return data.blogPosts.length > 0 ? data.blogPosts[0] : false;
};

export default async function BlogPost({ params }) {
  const slug = params.slug;
  const blogPost = await getBlogPost(slug);
  if (!blogPost) {
    notFound();
  }

  // Get sibling posts for next / prev direction links.
  const prevPost = await getSiblingPost(blogPost.id, -1);
  const nextPost = await getSiblingPost(blogPost.id, 1);

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
            <div className="my-10 p-10 bg-brand-platinum bg-opacity-10 text-gray-50 rounded-lg">
              {blogPost?.postContent?.html && (
                <div
                  className="blog-post"
                  dangerouslySetInnerHTML={{
                    __html: blogPost?.postContent?.html,
                  }}
                ></div>
              )}
              {blogPost?.youTubeEmbed && (
                <div className="youtube-wrapper mt-10">
                  <Suspense fallback={<p>Loading video...</p>}>
                    <YouTubeEmbed src={blogPost.youTubeEmbed} />
                  </Suspense>
                </div>
              )}
            </div>
            <div className="flex w-100">
              <div className="text-left">
                {prevPost && (
                  <Link
                    type="a"
                    href={`/blog/post/${prevPost.slug}`}
                    className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex">
                      <div className="content-start">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="inline-block w-4 h-4 mr-3 mt-1"
                        />
                      </div>
                      <div className="inline-block max-w-52">
                        {prevPost.name}{" "}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
              <div className="text-right ml-auto">
                {nextPost && (
                  <Link
                    type="a"
                    href={`/blog/post/${nextPost.slug}`}
                    className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex">
                      <div className="inline-block max-w-52">
                        {nextPost.name}{" "}
                      </div>
                      <div className="content-start">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="inline-block w-4 h-4 ml-3 mt-1"
                        />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
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
