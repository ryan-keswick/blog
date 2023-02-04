import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  blog: {
    name: "blog",
  },
  resume: {
    name: "resume",
  },
  fit: {
    name: "fit",
  },
};

{
  /* <div className="hidden md:block"> */
}

export const NavBar = () => {
  return (
    <div className="flex h-40 flex-row gap-3 font-serif text-sm font-semibold dark:text-zinc-300 md:ml-5 md:mt-36 md:flex-col md:gap-5">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="my-1 block h-8 w-20 border text-center"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
