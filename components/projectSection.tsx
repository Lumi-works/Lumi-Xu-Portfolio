"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

import SlideUp from "@/components/slideUp";

const projects = [
  {
    name: "Fire-Chat",
    description:
      "A real-time chatting application powered by firebase. A real-time chatting application powered by firebase.",
    image: "/shaking-hands.GIF",
    github: "https://github.com/Lumi-works/firebase-mini-chat",
    link: "/",
  },
  {
    name: "Fire-Chat",
    description:
      "A real-time chatting application powered by firebase. A real-time chatting application powered by firebase.",
    image: "/shaking-hands.GIF",
    github: "https://github.com/Lumi-works/firebase-mini-chat",
    link: "/",
  },
  {
    name: "Fire-Chat",
    description:
      "A real-time chatting application powered by firebase. A real-time chatting application powered by firebase.",
    image: "/shaking-hands.GIF",
    github: "https://github.com/Lumi-works/firebase-mini-chat",
    link: "/",
  },
];

function ProjectSection() {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        {" "}
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mt-8">
                    <Link href={project.link} target="_blank">
                      <Image
                        src="/shaking-hands.GIF"
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-8">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
