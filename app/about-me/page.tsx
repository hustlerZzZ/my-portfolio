"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import WhiteSign from "@/public/white-sign.png";
import BlackSign from "@/public/black-sign.png";

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="container mx-auto px-4 lg:px-0">
      <div className="hidden lg:block h-2 w-64 mt-16 mb-8 bg-black dark:bg-white"></div>
      <div className="text-lg md:text-2xl flex flex-col space-y-3">
        <p>Hello! Thanks for stopping by my personal website.</p>
        <p>
          I&apos;m <span className="text-orange-600">Prince Pal</span>.
          I&apos;ve been working in full-stack development for over 2 years,
          doing both the coding you see on the screen{" "}
          <span className="text-orange-600">Frontend</span> and the stuff that
          happens behind the scenes{" "}
          <span className="text-orange-600">Backend</span>. But what really gets
          me excited is making websites and apps that are easy for everyone to
          use and look good too!
        </p>
        <p>
          I&apos;m really into{" "}
          <span className="text-orange-600">JavaScript</span> and{" "}
          <span className="text-orange-600">TypeScript</span>, which are
          languages used to build websites. I also know a bunch of frameworks
          that make building websites even easier, like{" "}
          <span className="text-orange-600">React</span>, and frameworks like{" "}
          <span className="text-orange-600">Next.js</span>. I love learning
          about new web tools and features.
        </p>
        <p>I believe that good communication is super important in any job.</p>
        <p>
          I&apos;m good at adapting to different situations, working
          efficiently, and always trying to do my best. My experience has taught
          me how to solve problems and lead teams, but I&apos;m also happy to
          work with others to get things done. I&apos;m excited about the chance
          to work together and make cool stuff!
        </p>
        <p>I&apos;m looking forward to the possibility of working with you!</p>
        <p>Thank you visiting on my website.</p>
      </div>

      <div className="my-8">
        {theme == "light" ? (
          <Image src={BlackSign} alt="black-sign" />
        ) : (
          <Image src={WhiteSign} alt="white-sign" />
        )}
      </div>
    </main>
  );
}
