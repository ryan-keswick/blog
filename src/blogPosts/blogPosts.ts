// TODO use zod validation
export type BlogPost = {
  id: number;
  title: string;
  thumbnailImage: string;
  text: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: "My University Journey",
    thumbnailImage: "graduation-caps-thrown-in-air.jpg",
    text: "my-university-journey.mdx",
    slug: "62c91e78-60d7-495f-ab6b-01001bdd3ad1",
  },
  {
    id: 1,
    title: "My University Journey",
    thumbnailImage: "graduation-caps-thrown-in-air.jpg",
    text: "my-university-journey.mdx",
    slug: "62c91e78-60d7-495f-ab6b-01001bdd3ad1",
  },
];
