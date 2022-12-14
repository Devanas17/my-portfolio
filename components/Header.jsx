import React from "react";
import deved from "../public/dev-ed-wave.png";
import anas from "../public/anas.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">devAnas</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-8 py-8">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Anas Abbasi
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Web3 Developer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I am a Web3 frontend developer who builds DApps using web development
          technologies like HTML, CSS, and JavaScript, as well as web3
          technologies like smart contracts and decentralised storage. I focus
          on creating visually appealing, easy to use DApps.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/Devanas17" target="_blank">
            <AiFillTwitterCircle />
          </a>

          <a href="https://www.linkedin.com/in/developeranas/" target="_blank">
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/Devanas17" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-80 md:w-80">
          <Image src={anas} layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Header;
