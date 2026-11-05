"use client";

import React, { useRef, useEffect, useState } from "react";
import { Section, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
        if (
          scrollHandler.scrollLeft >=
          scrollHandler.scrollWidth - scrollHandler.clientWidth - 1
        ) {
          scrollHandler.scrollLeft = 0;
        } else {
          scrollHandler.scrollLeft += 0.5;
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
      className="flex overflow-x-auto gap-4 md:gap-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-x-visible py-1 scrollbar-hide"
    >
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex-none w-64 md:w-72 lg:w-auto flex flex-col h-full min-w-0 p-3 bg-[#F4F0F8] rounded-lg group"
        >
          {/* post-image */}
          <Link
            href={item.slug}
            className="mb-4 block overflow-hidden rounded-lg w-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-28 md:h-32 lg:h-40 rounded-lg object-cover lg:mb-4 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* post-text */}
          <div className="flex flex-col">
            <Link
              href={item.slug}
              className="group-hover:text-[#FF5959] font-semibold text-lg line-clamp-2 leading-6 mb-3 md:mb-6 lg:mb-6"
            >
              {item.title}
            </Link>
          </div>

          {/* post-metadata */}
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={item.authorAvatar}
              alt={item.author || "Author avatar"}
              className="w-10 h-10 lg:w-12 lg:h-12 md:w-12 md:h-12 rounded-full shrink-0 object-cover"
            />

            <div className="flex-1">
              <p className="text-sm md:text-base lg:text-base font-semibold text-[#2B2C34]">
                {item.author}
              </p>

              <div className="flex gap-2 md:gap-4 lg:gap-1">
                <p className="text-xs md:text-sm lg:text-base text-[#2B2C34]">
                  {item.date}
                </p>
                <span className="text-sm md:text-base lg:text-base text-[#2B2C34]">•</span>
                <p className="text-xs md:text-sm lg:text-base text-[#2B2C34]">
                  {item.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
