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
    <footer className="w-full px-4 sm:px-6 lg:px-12 py-6 lg:py-8 text-sm bg-[rgb(35,37,54)] text-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <Link href="/" className="flex items-center gap-4">
          <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-[#FFD6D6]"></div>
          <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">
            Car Blog
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-base lg:text-lg font-medium">
          <Link
            href="/"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>

      {/* Newsletter div */}
      <div className="w-full mx-auto mb-8 my-4 flex flex-col lg:flex-row items-center justify-between bg-[#2A2B39] gap-4 p-6 lg:px-8 lg:py-10 rounded-lg">
        <h2 className="w-full lg:w-3/5 lg:max-w-3xl text-left text-white text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
          Subscribe to our news letter to get latest updates and news
        </h2>

        {/* email input and subscribe btn */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-3 w-full lg:w-auto"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="w-full sm:w-auto px-4  py-2  md:px-4 md:py-2.5 rounded-md border border-gray-300 bg-white text-gray-800 font-medium text-sm md:text-base outline-none focus:ring-2 focus:ring-[#ff595f]"
            placeholder="example@email.com"
          />
          <button
            type="submit"
            className="w-[30%] sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-md bg-[#ff595f] text-white font-semibold text-sm md:text-base cursor-pointer hover:bg-[#f04450] transition-colors whitespace-nowrap"
          >
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Socials */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left ">
        <div className="text-sm md:text-base leading-relaxed text-gray-300">
          <p>Finestreet 118 2561 abctown</p>
          <p>example@yourmail.com &nbsp;|&nbsp; 001 213 454 442</p>
        </div>

        <div className="flex items-center gap-6 text-gray-200">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#ff595f] transition-colors duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
