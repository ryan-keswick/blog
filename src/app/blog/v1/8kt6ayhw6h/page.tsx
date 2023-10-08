import Link from "next/link";

import Carousel, { CarouselItem } from "@/components/Carousel/Carousel";
import SubHeading from "@/components/SubHeading/SubHeading";

export default function Page() {
  return (
    <main className="flex justify-center max-h-full">
      <div className="flex flex-col max-w-5xl justify-center">
        <header className="self-center m-4 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <h1 className="text-3xl">Perth To UNSW Computer Science</h1>
        </header>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <SubHeading subHeading="Introduction" />
          <p>todo</p>
          <SubHeading subHeading="Winning the Hackathon" />
          <p>
            I had the opportunity to participate in a hackathon when I was 15.
            Each team had a topic to tackle and from the options provided we
            chose ocean pollution. {"It's"} a big topic to tackle, especially
            for absolute beginners in coding. Ocean pollution ended up being the
            theme for our content-based website. We coded a plain HTML and CSS
            website in 48 hours, sparking an interest in coding that I have not
            shaken since.
          </p>
          <br />
          <p>
            Microsoft ran this event and compelled us to use GitHub and Azure,
            so luckily, the source code exists, and I have got it working on
            here, so take a peek into what a 15-year-old could do with no
            knowledge achieved in 48 hours.
          </p>
          <div className="flex justify-center gap-5 my-5">
            <Link
              href={"/team-hydro-sphere/index.html"}
              target={"_blank"}
              className="border-2 rounded-md p-2 hover:bg-white hover:text-black transition-all"
            >
              <p>Winning Hackathon Website</p>
            </Link>
            <a
              href={"https://github.com/ryan-keswick/TeamHydroSphere"}
              target={"_blank"}
              className="border-2 rounded-md p-2 hover:bg-white hover:text-black transition-all"
            >
              <p> Source Code (GitHub)</p>
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
            Winning a Microsoft Surface was nice, but I realised I enjoyed the
            coding {'"loop"'}. Coming up with an idea on how a program should
            run, whether it be a React App or Page Rank algorithm. Writing some
            bad code, a couple Google searches later, it would turn into
            slightly better code, and the cycle would continue for many hours.
            This is the most essential trait a programmer should have:
            persevering when a software bug shows up and enjoying solving the
            problem, no matter how long it takes.
          </p>
          <SubHeading subHeading="Computer Science, but which University?" />
          <p>
            Moving into the final years of high school, I knew I wanted to study
            some form of computer science, but the question was which
            University? I had offers from UWA, UNSW, Uni Melb and ANU. Honestly,
            I {"didn't"} know the difference between these acronyms. The only
            thing differentiating them was Perth, Sydney, Melbourne or Canberra.
            I grew up in Perth and concluded that it is a small town on the
            {"world's edge"}, so why not go somewhere different whilst young? As
            {"Australia's"} political and geographic capital, Canberra seemed
            like the opposite of Perth, but upon closer inspection, it is tiny,
            cold in winter and seemed even more boring than Perth. Melbourne, a
            population of ~5ish million, is the cultural heart of Australia
            (supposedly), but after one look at the annual sunny days, I decided
            that only Sydney was left as an option.
          </p>
          <p className="italic my-5 justify-center flex">
            {'"'}If you {"don't"} live in Sydney, {"you're"} just camping out
            {'"'} - Paul Keating
          </p>
          <p>
            Although the above quote is denied by the former prime minister
            (most likely dismissed to woo Melbourne voters), it definitely has
            legs. Sydney sells itself better domestically and internationally.
            It sold itself to an 18-year-old me based on the tagline,{" "}
            {'"Beaches and Sun"'}. I was unaware of how Sydney is{" "}
            {"Australia's "}
            tech capital or that UNSW is the best University producing Software
            Engineers in Australia. My choice of UNSW was just lucky.
          </p>
        </div>
      </div>
    </main>
  );
}
