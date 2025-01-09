import Link from "next/link";
import { FaFreeCodeCamp } from "react-icons/fa6";

export const Logo = () => {
  return (
    <Link href="/" className="flex space-x-4 items-center font-bold dark:text-white">
      <FaFreeCodeCamp className="text-orange-600 dark:text-white md:text-3xl" />
      <h1 className="text-xl md:text-3xl">
        Prince <span>Portfolio</span>
      </h1>
    </Link>
  );
};
