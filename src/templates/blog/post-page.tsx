import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { PostShare } from "@/templates/blog/components/post-share";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import Markdown from "react-markdown";

export type PostPageProps = {
  post: Post;
};

export const PostPage = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");

  const postUrl = `https://site.set/blog${post.slug}`;

  const {
    Container,
    Image: AvatarImage,
    Content,
    Title,
    Description,
  } = Avatar();

  return (
    <main className="text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>
            <div className="px-4 md:px-6 lg:px-12"></div>
            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
              <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Container>
                <AvatarImage
                  src={post?.author.avatar}
                  alt={post?.title}
                  size="sm"
                />
                <Content>
                  <Title>{post?.author.name}</Title>
                  <Description>
                    Publicado em {""}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Description>
                </Content>
              </Container>
            </header>
            <div className="prose prose-invert whitespace-pre-wrap max-w-none px-4 mb-6 mt-12 md:px-6 lg:px-12">
              <Markdown>{post?.body.raw}</Markdown>
            </div>
          </article>
          <PostShare
            url={postUrl}
            title={post.title}
            description={`Confira este post: ${post.description}`}
          />
        </div>
      </div>
    </main>
  );
};
