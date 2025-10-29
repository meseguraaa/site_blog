import { BlogList, type BlogListProps } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: any) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BlogListProps>;
