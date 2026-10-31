"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export function Footer() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <footer className="w-full md:px-4 lg:px-12 md:py-2 lg:py-4 text-sm bg-[rgb(35,37,54)] text-gray-200 ">
      <div className="flex items-center justify-between md:px-3 md:py-2 lg:px-5 lg:py-4">
        <div className="flex items-center gap-4">
          <div className="sm:h-6 sm:w-6 lg:h-12 lg:w-12 rounded-full bg-[#FFD6D6]"></div>
          <span className="sm:text-lg lg:text-xl">LOGO</span>
        </div>

        <nav className="flex items-center md:gap-3 lg:gap-4 md:text-base lg:text-lg md:font-medium lg:font-bold">
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            About us
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>

      <div className="w-[97%] mx-auto my-4 flex items-center justify-between bg-[#2A2B39] md:px-5 md:py-6 lg:px-8 lg:py-14">
        <h2 className="lg:w-3/5 lg:max-w-3xl text-left text-white md:text-2xl lg:text-4xl font-bold leading-tight">
          Subscribe to our news letter to get latest updates and news
        </h2>

        <form action="" className="flex  items-center gap-4">
          <input
            type="text"
            name="email"
            id="email"
            className="lg:h-1 md:px-3 md:py-3 lg:p-6 lg:py-6 rounded-md border border-gray-300 bg-white text-gray-800 font-semibold  lg:text-xl outline-0 "
            placeholder="example@email.com"
          />
          <button
            type="submit"
            className="flex items-center gap-1 md:h-12 md:px-3 md:py-2 lg:h-12 lg:px-6 lg:py-4 rounded-md border border-none bg-[#ff595f] text-white font-semibold lg:text-xl cursor-pointer hover:bg-[#f04450]"
          >
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="flex flex-wrap items-end justify-between p-6 pt-0.5">
        <div className="text-lg leading-relaxed text-gray-300">
          <p>Finestreet 118 2561 abctown</p>
          <p>example@yourmail.com&nbsp;&nbsp; 001 213 454 442</p>
        </div>

        <div className="flex items-center gap-8 text-gray-200">
          <a
            href="#"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
