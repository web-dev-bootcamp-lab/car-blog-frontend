"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

/**
 * @typedef {object} NewTech
 * @property {string} id
 * @property {string} sectionTag
 * @property {string} author
 * @property {string} heading
 * @property {string} subheading
 * @property {string} items
 * @property {string} quote
 * @property {string} slug
 * @property {string} location
 * @property {string} avatar
 * @property {string} country
 */

export default function TestimonialSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data?.items || [];
  const currentItem = items[currentIndex];

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (!items.length || !currentItem) return null;

  return (
    <>
      <section className="-mx-4 lg:-mx-26 my-4 md:my-12 lg:my-24 px-6 lg:px-28 py-6 lg:py-12 bg-[#232536]">
        {/* grid wrapper */}
        <div className="grid grid-cols-1 md:gap-4 lg:gap-20 md:pl-2 lg:pl-4 lg:grid-cols-9 text-white">
          {/* Heading */}
          <div className="flex flex-col lg:col-span-4 gap-2 md:pt-4 lg:pt-12 lg:border-r lg:pr-12 lg:border-[#FBF6EA]">
            <p className="text-sm md:text-base lg:text-base font-semibold">{data.sectionTag}</p>
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight">{data.heading}</h2>
            <h2 className="text-sm md:text-base lg::text-base font-normal">{data.subheading}</h2>
          </div>

          {/* quote */}
          <div className="lg:col-span-5 mt-2 mr-8 flex justify-between ">
            <div
              key={currentItem.id}
              className="flex flex-col justify-between h-full"
            >
              <p className="text-lg md:text-2xl lg:text-2xl text-gray-300 font-bold  lg:leading-8 -mb-24 lg:mb-4 ">
                {currentItem.quote}
              </p>

              <div className="flex justify-between mt-24 pt-8">
                {/* author */}
                <div className="flex gap-4">
                  <img
                    src={currentItem.avatar}
                    className="w-10 h-10 lg:w-14 lg:h-14 md:w-14 md:h-14 rounded-full shrink-0 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-base md:text-lg lg:text-2xl font-bold">{currentItem.author}</p>
                    <p className="text-sm text-gray-300">
                      {currentItem.location},
                    </p>
                    <p className="text-sm text-gray-300">
                      {currentItem.country}
                    </p>
                  </div>
                </div>

                {/* nav-arrows */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    className="p-1 lg:p-3 lg:w-12 lg:h-12 md:p-3 md:w-12 md:h-12  rounded-full items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-125 transition-all duration-300"
                  >
                    <MoveLeft className="text-[#232536] group-hover:text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="p-1 lg:p-3 lg:w-12 lg:h-12 md:p-3 md:w-12 md:h-12  rounded-full items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-125 transition-all duration-300"
                  >
                    <MoveRight className="text-[#232536] group-hover:text-white " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
