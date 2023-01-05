import React from 'react'
import Image from "next/image"
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import instagram from "../public/instagram.png"
import facebook from "../public/facebook.png"


const Portfolio = () => {
  return (
    <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap max-w-6xl mx-auto">
            <div className="flex-1 border border-gray-300 rounded-lg">
              <Image
                className="rounded-lg object-contain object-center"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={instagram}
              />
            </div>
            <div className="flex-1 border border-gray-300 rounded-lg hover:bg-red-600">
              <Image
                className="rounded-lg object-contain hover:opacity-60 transition transform duration-500 ease-out cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={facebook}
              />
            </div>
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            
          </div>
        </section>
  )
}

export default Portfolio