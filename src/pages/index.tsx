import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Ryan Keswick</title>
        <meta name="description" content="Ryan Keswick's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-gradient-to-b from-[#f1E0b0] to-[#e7cfc8] dark:from-[#000000] dark:to-[#110500]">
        <div className="max-w-xs">
          <NavBar />
          <div className="flex border dark:text-white"> here</div>
        </div>
      </main>
    </>
  );
};

export default Home;
