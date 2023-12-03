// import Link from "next/link";

// import Carousel, { CarouselItem } from "@/components/Carousel/Carousel";
import SubHeading from "@/components/SubHeading/SubHeading";

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
          <SubHeading subHeading="Assumptions" />
          <p>
            - {"You're"} using a postgres database named {'"backend"'} in the
            {'"public"'} schema. <br />- Already have a valid Fivetran sync with
            the backend database and the a snowflake database
          </p>

          <p>The best way to setup this</p>

          <p>
            A developer will develop in the dbt Cloud dbt IDE and when do
            iterating on the dbt model (SQL). A new schema with the developers
            name prefixed by DBT will appear in the target Snowflake database.
          </p>
        </div>
      </div>
    </main>
  );
}
