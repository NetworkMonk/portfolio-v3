import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { josefin } from "@/app/fonts";
import InView from "../animated/InView";
import Link from "next/link";
import Pagination from "../common/Pagination";

const pageSize = 3;

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
          blogPosts(first: ${pageSize}, skip: ${(page - 1) * pageSize}) {
            slug
            name
            displayStyle
            summary
            publishDate
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

  const BlogPostCard = ({ blog }) => {
    return (
      <Link
        type="div"
        href={`/blog/${blog.slug}`}
        className="rounded-lg p-5 bg-brand-platinum bg-opacity-10 hover:bg-opacity-100 hover:text-brand-black transition-all duration-300 in-up flex flex-col"
      >
        <p className="text-2xl tracking-wide min-h-36 mb-5">{blog.name}</p>
        <p className="text-sm mt-auto mb-5">{blog.summary}</p>
        <p className="text-right text-sm text-gray-400">{blog.publishDate}</p>
      </Link>
    );
  };

  return (
    <Section>
      <Container>
        <InView>
          <div className="md:p-10">
            <h2
              className={`${josefin.className} text-3xl tracking-wider in-up-right`}
              style={{ animationDelay: "0.0s" }}
            >
              Blog Posts
            </h2>
            <p
              className="my-5 text-sm in-up-right text-gray-400"
              style={{ animationDelay: "0.0s" }}
            >
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
          <div className="mt-auto">
            <Pagination
              total={Math.ceil(pageInfo.pageSize / pageSize)}
              current={currentPage}
              basePath="/blog"
              spread={1}
            />
          </div>
        </InView>
      </Container>
    </Section>
  );
}
