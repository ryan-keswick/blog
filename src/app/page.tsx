import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/blog_posts/blogPosts";

type BlogCardProps = {
  title: string;
  slug: string;
  thumbnailImage: string;
};

const BlogCard = ({ title, slug, thumbnailImage }: BlogCardProps) => {
  return (
    <Link className="p-5 " href={`/blog/v1/${slug}`}>
      <div className="relative w-[256px] h-48 ">
        <h1 className="absolute inset-y-1/3 left-2 z-10 w-full h-full/2 ">
          {title}
        </h1>
        <div className="relative w-full h-full z-0  ">
          <Image
            className="rounded-2xl object-fit object-center"
            src={`/blogImages/${thumbnailImage}`}
            fill={true}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="grid grid-flow-row-dense grid-cols-3 max-w-5xl content-center">
        {blogPosts.map((post, index) => {
          return (
            <BlogCard
              key={index}
              title={post.title}
              slug={post.slug}
              thumbnailImage={post.thumbnailImage}
            />
          );
        })}
      </div>{" "}
    </main>
  );
}
