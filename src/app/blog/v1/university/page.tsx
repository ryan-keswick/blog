import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center">
      <main className="flex flex-col max-w-5xl justify-center">
        <h1 className="self-center m-4 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          From Perth To UNSW
        </h1>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <p>
            I had the opportunity to participate in a hackathon when I was 15
            years old. Our team won the hackathon by coding a{" "}
            <p className="font-semibold inline-block">very</p> simple website
            with plain HTML and CSS. This sparked an interest in coding that I
            have not shaken since. Microsoft ran this event and forced us to use
            GitHub and Azure so luckily the source code exists and I have got it
            working on here, so take a peek into what a 15 year old could do
            with no knowledge could do in 48 hours.
            <div className="flex justify-center gap-5 my-5">
              <Link
                href={"/teamhydrosphere/index.html"}
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
          </p>

          <p>
            It is pretty neat that HTML and CSS from 8 years still creates the
            same webpage. All I did was put the GitHub project in the NextJS
            public directory, perhaps simple is indeed better!
          </p>
          <br />

          <p></p>
          <br />

          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Maecenas tempor, ipsum et mattis iaculis, enim nulla iaculis nulla,
            sed interdum odio leo id lectus. Suspendisse orci mi, tincidunt et
            scelerisque in, luctus sit amet arcu. Proin diam arcu, iaculis in
            turpis a, porta ultricies tortor. Donec lectus dui, posuere ut nibh
            eu, gravida semper nisl. Suspendisse leo orci, feugiat et
            consectetur nec, volutpat eget lorem. Sed at diam viverra, consequat
            felis vitae, maximus nibh. Duis a nulla in est volutpat
            sollicitudin. Nullam gravida tincidunt mi, a iaculis nisi gravida
            quis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nam nec fermentum urna, non
            volutpat nisl.
          </p>
        </div>
      </main>
    </div>
  );
}
