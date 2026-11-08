"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  /* toggle menu */
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-14 sm:h-12 lg:h-20 px-4 sm:px-6 lg:px-12 text-sm bg-[rgb(35,37,54)] text-gray-200">
      <div className="flex items-center justify-between h-full lg:px-5 lg:py-4">
        {/* Car Blog */}
        <Link href="/" className="flex items-center gap-4">
          <div className="h-8 w-8 sm:h-8 sm:w-8 lg:h-12 lg:w-12 rounded-full bg-[#FFD6D6] shrink-0"></div>
          <span className="text-base lg:text-xl font-bold tracking-tight">
            Car Blog
          </span>
        </Link>

        {/* Desktop View */}
        <nav className="hidden md:flex items-center py-2 lg:py-0 md:gap-4 lg:gap-6 md:text-sm lg:text-lg font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#ff595f] transition-colors duration-200 ${
                isActive(link.href) ? "text-[#ff595f]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className={`sm:h-7 lg:h-12 sm:px-4 sm:py-1 lg:px-8 lg:py-3 rounded-md bg-white text-[#232536] hover:text-[#ff595f] transition-colors duration-200 flex items-center justify-center ${
              isActive("/subscribe") ? "text-[#ff595f]" : ""
            }`}
          >
            Subscribe
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              {/* Blur Backdrop */}
              <div
                className="absolute inset-0 bg-[#181818]/70 backdrop-blur-xl"
                onClick={closeMenu}
              />

              {/* Menu Content */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative z-50 h-full flex flex-col items-center justify-center space-y-8 text-white px-6"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-2xl font-medium uppercase tracking-wide transition-colors ${
                      isActive(link.href)
                        ? "text-[#ff595f]"
                        : "hover:text-[#ff595f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/subscribe"
                  onClick={closeMenu}
                  className="mt-4 px-8 py-3 rounded-md bg-[#ff595f] text-white font-semibold text-lg hover:bg-[#f04450] transition-colors"
                >
                  Subscribe
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
