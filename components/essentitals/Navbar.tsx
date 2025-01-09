"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="flex justify-between container mx-auto px-4 py-4 lg:px-0 md:py-8">
      <Logo />

      <div className="flex space-x-8 justify-center items-center">
        {navActive && (
          <div className="hidden md:flex space-x-8 justify-center items-center">
            <nav className="flex space-x-8">
              <Link href="/">Home</Link>
              <Link href="/about-me">About Me</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact-me">Contact Me</Link>
            </nav>

            <div>
              <ModeToggle />
            </div>
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
