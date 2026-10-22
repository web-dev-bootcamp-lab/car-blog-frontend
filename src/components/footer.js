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
    <footer className="w-full px-12 py-4 border-t border text-sm bg-[rgb(35,37,54)] text-gray-200 ">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#FFD6D6]"></div>
          <span className="text-xl">LOGO</span>
        </div>

        <nav className="flex items-center gap-6 text-lg font-bold">
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

      <div className="w-[97%] mx-auto my-12 flex flex-wrap items-center justify-between bg-[#2A2B39] px-12 py-18">
        <h2 className="lg:w-3/5 max-w-3xl text-left text-white text-5xl font-bold leading-tight">
          Subscribe to our news letter to get latest updates and news
        </h2>

        <form action="" className="flex  items-center gap-6">
          <input
            type="text"
            name="email"
            id="email"
            className="h-14 pl-6 pr-28 py-6 rounded-md border border-gray-300 bg-white text-gray-800 font-semibold text-xl outline-0 "
            placeholder="example@email.com"
          />
          <button
            type="submit"
            className="flex items-center gap-1 h-14 px-12 py-4 rounded-md border border-none bg-[#ff595f] text-white font-semibold text-xl cursor-pointer hover:bg-[#f04450]"
          >
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="flex flex-wrap items-end justify-between p-6 pt-0.5 -mt-6">
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
