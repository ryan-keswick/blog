// import Link from "next/link";

// import Carousel, { CarouselItem } from "@/components/Carousel/Carousel";
import SubHeading from "@/components/SubHeading";

export default function Page() {
  return (
    <main className="flex justify-center max-h-full">
      <div className="flex flex-col max-w-5xl justify-center">
        <header className="self-center m-4 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <h1 className="text-3xl">
            How to use Snowflake with Cloud dbt and Fivetran
          </h1>
        </header>
        <div className="flex flex-col gap-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <SubHeading subHeading="Goals" />
          <p>
            This guide will walk you through setting up a Snowflake data
            warehouse, connecting it to Fivetran, and using Cloud dbt to
            transform your data.
          </p>
          <p>
            {"It's"} best practice to logically separate your different
            environments. For example, if {"you're"} deploying a SaaS product to
            serve different regions, you would use seperate AWS accounts for
            each region or environment. In this guide, {"we'll"} use separate
            Snowflake accounts for each environment (dev, prod). A dbt project
            has the ability to deploy to different environments. This feature is
            supported well.
          </p>
          <p>
            Developers will prototype and test in the dev environment. When they
            are ready to deploy to production, they will merge their changes
            into the main branch. This will trigger a CI/CD pipeline to deploy
            the changes to the production environment.
          </p>
          <SubHeading subHeading="Setting Up Fivetran" />
          <p>
            Fivetran is easily the *fastest* way to get your postgres data into
            Snowflake. I may not be the cheapest, but it is the easiest. I would
            recommend just starting with Fivetran and if the pricing is really
            killing you. You can always switch to a cheaper solution later.
          </p>
          <p>
            The Fivetran docs are pretty good. I would recommend just following
            them. Name you destination in Snowflake something like `RAW`.
          </p>

          <SubHeading subHeading="Setting Up Snowflake" />
          <p>
            Snowflake is a cloud data warehouse. It is a fully managed service
            that allows you to scale your compute warehouse up and down to zero
            as needed. It has a lot of great features that make it a great
            choice for a data warehouse. It is also well supported by dbt.
          </p>
          <p>
            Use my terraform module to architect your Snowflake account. It will
            create the following resources:
            <ul>
              <li>- Databases</li>
              <li>- Warehouses</li>
              <li>- Roles</li>
              <li>- Users</li>
              <li>- Shares</li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
