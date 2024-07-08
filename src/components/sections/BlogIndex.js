import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";
import Link from "next/link";
import Pagination from "../common/Pagination";
import { notFound } from "next/navigation";
import Image from "next/image";

const pageSize = 12;

const getBlogPosts = async (page) => {
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
          blogPosts(first: ${pageSize}, skip: ${
          (page - 1) * pageSize
        }, orderBy: publishDate_DESC) {
            slug
            name
            displayStyle
            summary
            publishDate
            thumbnailImage {
              url
            }
          }
          blogPostsConnection() {
            pageInfo {
              pageSize
            }
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  return {
    blogPosts: data.blogPosts,
    pageInfo: data.blogPostsConnection.pageInfo,
  };
};

export default async function BlogIndex({ page }) {
  const currentPage = typeof page === "number" ? page : 1;
  const { blogPosts, pageInfo } = await getBlogPosts(currentPage);

  if (blogPosts.length === 0) {
    notFound();
  }

  const BlogPostCard = ({ blog }) => {
    return (
      <div className="rounded-lg bg-brand-platinum bg-opacity-10 hover:bg-opacity-100 hover:text-brand-black transition-all duration-300 in-up relative overflow-hidden group">
        {blog?.thumbnailImage?.url && (
          <Image
            width="300"
            height="300"
            src={blog.thumbnailImage.url}
            alt={blog.name}
            className="w-full h-full object-cover absolute -z-10 opacity-40 group-hover:opacity-15 pointer-events-none transition-opacity duration-300"
          />
        )}
        <Link
          type="div"
          href={`/blog/post/${blog.slug}`}
          className="p-5 flex flex-col"
        >
          <p className="text-2xl tracking-wide min-h-36 mb-5">{blog.name}</p>
          <p className="text-sm mt-auto mb-5">{blog.summary}</p>
          <p className="text-right text-sm text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
            {new Date(blog.publishDate).toLocaleDateString()}
          </p>
        </Link>
      </div>
    );
  };

  return (
    <section className="flex-1 flex flex-col">
      <Section>
        <Container>
          <InView>
            <div className="md:p-10">
              <h1 className={`${josefin.className} text-3xl tracking-wider`}>
                Blog Posts
              </h1>
              <p className="my-5 text-sm text-gray-400">
                I post a lot about web technologies and development and I post a
                combination of text and video guides.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {blogPosts.map((blog, index) => {
                  return (
                    <BlogPostCard key={blog.slug} blog={blog} index={index} />
                  );
                })}
              </div>
            </div>
            <div className="mt-auto"></div>
          </InView>
        </Container>
      </Section>
      <section className="mt-auto">
        <Container>
          <div className="md:px-10">
            <Pagination
              total={Math.ceil(pageInfo.pageSize / pageSize)}
              current={currentPage}
              basePath="/blog"
              spread={1}
            />
          </div>
        </Container>
      </section>
    </section>
  );
}
