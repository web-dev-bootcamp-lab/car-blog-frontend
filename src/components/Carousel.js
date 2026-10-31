"use client";

import React from "react";
import { Section, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/**
 * @typedef {object} NewTech
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} authorAvatar
 * @property {string} date
 * @property {string} readTime
 * @property {string} image
 * @property {string} slug
 */

export default function Carousel({ data }) {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollHandler = containerRef.current;
    if (!scrollHandler) return;

    let animationFrameId;

    const scroll = () => {
      if (
        !isHovering &&
        scrollHandler.scrollWidth > scrollHandler.clientWidth
      ) {
        scrollHandler.scrollLeft += 1;

        if (
          scrollHandler.scrollLeft + scrollHandler.clientWidth >=
          scrollHandler.scrollWidth
        ) {
          scrollHandler.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      className="flex overflow-x-auto gap-4 lg:grid lg:grid-cols-4 sm:grid-cols-2 sm:p-1 sm:px-8 sm:gap-6 lg:gap-4 lg:-m-2 lg:overflow-x-visible lg:snap-none scrollbar-hide"
    >
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex-none w-72 md:w-80 lg:w-auto flex flex-col h-full min-w-0 p-3 bg-[#F4F0F8] rounded-lg group"
        >
          {/* post-image */}
          <Link
            href={item.slug}
            className="mb-4 block overflow-hidden rounded-lg w-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 rounded-lg object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* post-text */}
          <div className="flex flex-col">
            <Link
              href={item.slug}
              className="group-hover:text-[#FF5959] font-semibold text-lg  line-clamp-2 leading-6 mb-6"
            >
              {item.title}
            </Link>
          </div>

          {/* post-metadata */}
          <div className="flex  items-center gap-4 mt-auto">
            <img
              src={item.authorAvatar}
              alt={item.author || "Author avatar"}
              className="w-12 h-12 rounded-full shrink-0 object-cover"
            />

            <div className="flex-1">
              <p className="text-base font-semibold text-[#2B2C34]">
                {item.author}
              </p>

              <div className="flex gap-4">
                <p className="text-sm text-[#2B2C34]">{item.date}</p>
                <span className="text-base text-[#2B2C34]">•</span>
                <p className="text-sm text-[#2B2C34]">{item.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
