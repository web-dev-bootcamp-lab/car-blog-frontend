"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <header className="w-full sm:h-12 lg:h-20 sm:px-6 lg:px-12 text-sm bg-[rgb(35,37,54)] text-gray-200 ">
      <div className="flex items-center justify-between lg:px-5 lg:py-4">
        <div className="flex items-center gap-4">
          <div className="sm:h-6 sm:w-6 lg:h-12 lg:w-12  rounded-full bg-[#FFD6D6]"></div>
          <span className="lg:text-xl md:text-base">LOGO</span>
        </div>

        <nav className="flex items-center md:py-2 lg:py-0 md:gap-4 lg:gap-6 md:text-sm lg:text-lg font-semibold">
          <Link
            href="/"
            className={`hover:text-[#ff595f] transition-colors duration-200 ${isActive("/") ? "text-[#ff595f]" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`hover:text-[#ff595f] transition-colors duration-200 ${isActive("/blog") ? "text-[#ff595f]" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#ff595f] transition-colors duration-200 ${isActive("/about") ? "text-[#ff595f]" : ""}`}
          >
            About us
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#ff595f] transition-colors duration-200 ${isActive("/contact") ? "text-[#ff595f]" : ""}`}
          >
            Contact Us
          </Link>
          <Link
            href="/subscribe"
            className={`sm:h-7 lg:h-12 sm:px-4 sm:py-1 lg:px-8 lg:py-3 rounded-md border border-none bg-white text-[#232536] hover:text-[#ff595f] transition-colors duration-200 ${isActive("/subscribe") ? "text-[#ff595f]" : ""}`}
          >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  );
}
