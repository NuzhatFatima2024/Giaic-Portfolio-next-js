
"use client";
import React from "react"
import Image from "next/image"
import Link from "next/link";
export default function HeroSection(){
    return(
        <section className="lg:py-20 mt-11 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-3xl sm:text-3xl lg:text-5xl text-white mb-6 font-extrabold"> Hello, I am Nuzhat Fatima </h1>
            <p className="text-[#ADB7BE] lg:text-xl mb-6 text-base sm:text-lg">
            I am an Enthusiastic Frontend Student at GIAIC, Exploring Web Development with a passion for creating interactive and responsive web applications .
            </p>
            <div>
            <Link
              href="/#contact" className="px-6 py-3 inline-block rounded-full w-full sm:w-fit mr-4 lg:mt-0 bg-gradient-to-br from-amber-700 via-amber-500 to-amber-800 hover:bg-slate-200 text-white">Hire Me
              </Link>
        
            </div>
            </div>

            <div className="col-span-5 place self-center ">
                <div className="rounded-lg bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[200px] relative mt-6 ml-4">
            <Image
              src="/1.png"
              alt="hero image"
              className=" rounded-lg absolute lg:w-fit lg:h-fit transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
                </div>
            </div>
            </div>
        </section>
    )
}
