// Use Zod
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
    slug: "uni",
  },
  {
    id: 1,
    title: "How to use Snowflake with dbt and Fivetran",
    thumbnailImage: "fivetran-dbt-snowflake.jpg",
    slug: "fivetran-dbt-snowflake",
  },
];
