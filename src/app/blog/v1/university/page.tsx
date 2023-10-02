import Link from "next/link";
import Image from "next/image";

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
          <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
          </Carousel>
          {/* <Carousel
            images={[
              {
                path: "blog-images/university/wctd-hack-2016-crunch.jpg",
                alt: "Ryan pictured doing last minute changes to website on a laptop",
                bottomText: "here",
              },
              {
                path: "blog-images/university/wctd-hack-2016-presenting.jpg",
                alt: "The team pitching the website with a demo to an audience",
                bottomText: "here",
              },
            ]}
          /> */}
        </div>
      </div>
    </main>
  );
}

{
  /* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */
}
