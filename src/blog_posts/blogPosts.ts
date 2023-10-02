export type BlogPost = {
  id: number;
  title: string;
  thumbnailImage: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: "My University Journey",
    thumbnailImage: "graduation-caps-thrown-in-air.jpg",
    slug: "me-university",
  },
];
