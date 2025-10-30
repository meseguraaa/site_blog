import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SITE.SET",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SITE.SET",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://site-blog-khaki-chi.vercel.app/og-image.jpg",
    siteName: "SITE.SET",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-blog-khaki-chi.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blog - SITE.SET",
      },
    ],
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
