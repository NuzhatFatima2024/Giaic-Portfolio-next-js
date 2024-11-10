
"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-7 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/1.png" width={600} height={600} alt="profile" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
             I’ve learned HTML, CSS, TypeScript, and Tailwind CSS, building several impressive projects. I’ve also participated in Hackathons, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I’m currently focused on mastering frontend technologies, preparing for more complex AI topics in the future. I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;