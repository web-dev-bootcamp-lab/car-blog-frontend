"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <header className="w-full px-12 py-4 border-t border text-sm bg-[rgb(35,37,54)] text-gray-200 ">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#FFD6D6]"></div>
          <span className="text-xl">LOGO</span>
        </div>

        <nav className="flex items-center gap-12 text-lg font-semibold">
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
            className={`hover:text-[#ff595f] transition-colors duration-200 ${isActive("/subscribe") ? "text-[#ff595f]" : ""}`}
           >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  );
}
