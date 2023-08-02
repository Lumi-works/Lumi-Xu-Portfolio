"use client";

import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
];

function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          {" "}
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              This is a paragraph briefly introducing myself.This is a paragraph
              briefly introducing myself.This is a paragraph briefly introducing
              myself.This is a paragraph briefly introducing myself.This is a
              paragraph briefly introducing myself.
            </p>
            <br />
            <p>
              This is another paragraph.This is another paragraph.This is
              another paragraph.This is another paragraph.This is another
              paragraph.This is another paragraph.
            </p>
            <br />
            <p>
              This is another paragraph.This is another paragraph.This is
              another paragraph.This is another paragraph.This is another
              paragraph.This is another paragraph.This is another paragraph.This
              is another paragraph.This is another paragraph.This is another
              paragraph.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start ">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <Image
              src="/shaking-hands.GIF"
              alt=""
              width={275}
              height={275}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
