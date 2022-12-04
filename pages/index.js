import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}