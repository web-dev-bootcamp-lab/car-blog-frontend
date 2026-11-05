"use client";
import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

/**
 * @typedef {Object} TestimonialItem
 * @property {string} id
 * @property {string} quote
 * @property {string} author
 * @property {string} location
 * @property {string} country
 * @property {string} avatar
 */

/**
 * @typedef {Object} TestimonialsData
 * @property {string} sectionTag
 * @property {string} heading
 * @property {string} subheading
 * @property {TestimonialItem[]} items
 */

export default function TestimonialSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = data?.items || [];
  const currentItem = items[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  if (!items.length || !currentItem) return null;

  return (
    <section className="w-full my-8 md:my-14 lg:my-24 py-8 md:py-12 lg:py-16 bg-[#232536]">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* grid wrapper */}
        <div className="grid grid-cols-1 md:gap-6 lg:gap-16 lg:grid-cols-9 text-white">
          {/* Heading */}
          <div className="flex flex-col lg:col-span-4 gap-2 md:pt-4 lg:pt-8 lg:border-r lg:pr-12 lg:border-[#FBF6EA]">
            <p className="text-sm md:text-base font-semibold">{data.sectionTag}</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">{data.heading}</h2>
            <h2 className="text-sm md:text-base font-normal text-gray-300">{data.subheading}</h2>
          </div>

          {/* quote */}
          <div className="lg:col-span-5 mt-6 lg:mt-2 flex flex-col justify-between">
            <div key={currentItem.id} className="flex flex-col justify-between h-full">
              <p className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed mb-8">
                &ldquo;{currentItem.quote}&rdquo;
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-700/50">
                {/* author */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentItem.avatar}
                    alt={currentItem.author}
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full shrink-0 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-base md:text-lg lg:text-xl font-bold">{currentItem.author}</p>
                    <p className="text-xs md:text-sm text-gray-300">
                      {currentItem.location}, {currentItem.country}
                    </p>
                  </div>
                </div>

                {/* nav-arrows */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <MoveLeft className="w-5 h-5 text-[#232536] group-hover:text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <MoveRight className="w-5 h-5 text-[#232536] group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
