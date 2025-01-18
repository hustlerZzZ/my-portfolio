"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoIosConstruct } from "react-icons/io";
import { GiTopHat } from "react-icons/gi";
import { BsPersonVcard } from "react-icons/bs";

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="flex justify-between container mx-auto px-4 py-4 lg:px-0 md:py-8">
      <Logo />

      <div className="flex space-x-8 justify-center items-center">
        {navActive && (
          <div className="hidden lg:flex space-x-8 justify-center items-center">
            <nav className="flex space-x-8">
              <Link href="/">Home</Link>
              <Link href="/about-me">About Me</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact-me">Contact Me</Link>
            </nav>
            <div>
              <ModeToggle />
            </div>
          </div>
        )}
        {navActive && (
          <div className="flex items-center justify-center lg:hidden w-full text-black bg-white absolute bottom-0 -left-8">
            <nav className="items-center justify-center flex p-2 space-x-4">
              <Link
                href="/about-me"
                className="flex flex-col items-center justify-center"
              >
                <BsPersonVcard className="text-xl" />
                <p className="text-xs">About Me</p>
              </Link>
              <Link
                href="/experience"
                className="flex flex-col items-center justify-center"
              >
                <GiTopHat className="text-xl" />
                <p className="text-xs">Experience</p>
              </Link>
              <Link
                href="/"
                className="flex flex-col items-center justify-center"
              >
                <FaHome className="text-xl" />
                <p className="text-xs">Home</p>
              </Link>
              <Link
                href="/contact-me"
                className="flex flex-col items-center justify-center"
              >
                <GrContact className="text-xl" />
                <p className="text-xs">Contact Me</p>
              </Link>
              <Link
                href="/projects"
                className="flex flex-col items-center justify-center"
              >
                <IoIosConstruct className="text-xl" />
                <p className="text-xs">Projects</p>
              </Link>
            </nav>
          </div>
        )}
        {!navActive ? (
          <button
            className="text-2xl"
            onClick={() => setNavActive((curr) => !curr)}
          >
            <RxHamburgerMenu />
          </button>
        ) : (
          <button
            className="text-2xl"
            onClick={() => setNavActive((curr) => !curr)}
          >
            <IoCloseSharp />
          </button>
        )}
      </div>
    </div>
  );
};
