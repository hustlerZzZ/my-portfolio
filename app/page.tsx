import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
} from "react-icons/rx";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-0 justify-between">
      <div className="flex flex-col space-y-12">
        <div className="hidden lg:block h-2 w-64 mt-16 mb-8 bg-black dark:bg-white"></div>
        <div className="flex flex-col items-center lg:items-start font-bold">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            Nice to meet you,
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-8xl">
            I&apos;m Prince Pal
          </h3>
        </div>
        <div className="flex justify-center lg:justify-start space-x-16">
          <div className="flex items-center justify-center  space-x-3">
            <p className="flex text-2xl md:text-6xl">
              1.5
              <span className="dark:text-white text-orange-600">+</span>
            </p>
            <p className="w-16">Years of experience</p>
          </div>
          <div className="flex items-center justify-center  space-x-3">
            <p className="flex text-2xl md:text-6xl">
              25
              <span className="dark:text-white text-orange-600">+</span>
            </p>
            <p className="w-12">Successful projects</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center lg:items-start space-y-4">
          <p className="font-bold text-2xl">Follow Me</p>
          <div className="flex space-x-8">
            <a href="https://github.com/hustlerZzZ">
              <RxGithubLogo className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/princepal0/">
              <RxLinkedinLogo className="text-2xl" />
            </a>
            <a href="https://x.com/iamhustlerzzz">
              <RxTwitterLogo className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/iamhustler.z/">
              <RxInstagramLogo className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start">
          <a
            href="/cv.pdf"
            download
            className="text-xl md:text-3xl md:font-extrabold px-2 py-2 md:px-8 md:py-4 bg-orange-600 text-white dark:text-black dark:bg-white"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative h-2/3 w-2/3"></div>
      </div>
    </main>
  );
}
