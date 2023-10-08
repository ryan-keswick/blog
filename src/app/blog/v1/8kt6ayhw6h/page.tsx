import Link from "next/link";

import Carousel, { CarouselItem } from "@/components/Carousel/Carousel";

export default function Page() {
  return (
    <main className="flex justify-center max-h-full">
      <div className="flex flex-col max-w-5xl justify-center">
        <h1 className="self-center m-4 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          From Perth To UNSW
        </h1>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div>
            I had the opportunity to participate in a hackathon when I was 15
            years old. Our team won the hackathon by coding a{" "}
            <div className="inline-block font-semibold">very</div> simple
            website with plain HTML and CSS. This sparked an interest in coding
            that I have not shaken since. Microsoft ran this event and forced us
            to use GitHub and Azure so luckily the source code exists and I have
            got it working on here, so take a peek into what a 15 year old could
            do with no knowledge could do in 48 hours.
          </div>
          <div className="flex justify-center gap-5 my-5">
            <Link
              href={"/team-hydro-sphere/index.html"}
              target={"_blank"}
              className="border-2 rounded-md p-2 hover:bg-white hover:text-black transition-all"
            >
              <h1>Winning Hackathon Website</h1>
            </Link>
            <a
              href={"https://github.com/ryan-keswick/TeamHydroSphere"}
              target={"_blank"}
              className="border-2 rounded-md p-2 hover:bg-white hover:text-black transition-all"
            >
              <h1> Source Code (GitHub)</h1>
            </a>
          </div>
          <div className="my-1 sm:my-10">
            <Carousel>
              <CarouselItem
                src={`/blog-images/wctd-hack-2016-presenting.jpg`}
                description={"I'm the 2nd person from the right"}
                alt={"The team pitching the website with a demo to an audience"}
              />
              <CarouselItem
                src={`/blog-images/wctd-hack-2016-crunch.jpg`}
                alt={"Two students making last minute changes"}
                description={"Making last minute changes"}
              />
              <CarouselItem
                src={`/blog-images/wctd-hack-2016-winners.jpg`}
                alt={"Winning"}
                description={"The Team with the coordinator"}
              />
            </Carousel>
          </div>
          <p>
            Winning a Microsoft Surface was nice, but what I actually won was
            the realization that I enjoyed the coding {'"loop"'}. I would come
            up with an idea on how a program should run, wether it be a React
            App or Page Rank algorithm. I would write some bad code, a couple
            google searches later it would turn into slightly better code and
            the cycle would continue for many hours. This is the most important
            trait a programmer should have, not only persevering when a software
            bug shows up, but enjoying the process of solving the problem, no
            matter how long it takes.
          </p>
        </div>
      </div>
    </main>
  );
}
