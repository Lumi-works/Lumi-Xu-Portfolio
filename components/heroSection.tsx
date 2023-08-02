"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/profile-photo.JPG"
            alt=""
            width={325}
            height={325}
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hello, I&#39;m Lumi
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a full-time student studying{" "}
            <span className="font-semibold text-teal-600">
              Math / Stat / CS{" "}
            </span>
            at UIUC. balabalabalba
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <HiArrowDown size={35} className="animate-bounce" />
      </div>
    </section>
  );
}

export default HeroSection;
