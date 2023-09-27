import Image from "next/image";
import Link from "next/link";

const blog_posts = [
  {
    id: 1,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 2,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 3,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 4,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 5,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 6,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 7,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
  {
    id: 8,
    title: "My University Journey",
    slug: "my-university-journey",
    thumbnail_image: "graduation-caps-thrown-in-air.jpg",
  },
];

type BlogCardProps = {
  title: string;
  slug: string;
  thumbnail_image: string;
};

const BlogCard = ({ title, slug, thumbnail_image }: BlogCardProps) => {
  return (
    <Link className="p-5 " href={`/blog/v1/${slug}`}>
      <div className="relative w-[256px] h-48 ">
        <h1 className="absolute inset-y-1/3 left-2 z-10 w-full h-full/2 ">
          {title}
        </h1>
        <div className="relative w-full h-full z-0  ">
          <Image
            className="rounded-2xl"
            src={`/blog_images/${thumbnail_image}`}
            fill={true}
            objectFit="cover"
            objectPosition="center"
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
        {blog_posts.map((card) => {
          return (
            <BlogCard
              key={card.id}
              title={card.title}
              slug={card.slug}
              thumbnail_image={card.thumbnail_image}
            />
          );
        })}
      </div>{" "}
    </main>
  );
}
