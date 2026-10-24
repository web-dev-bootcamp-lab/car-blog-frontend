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
      <section className="-mx-12 my-24 px-28 py-12 bg-[#232536]">
        {/* grid wrapper */}
        <div className="grid grid-cols-1 gap-20 pl-4 lg:grid-cols-9 text-white">
          {/* Heading */}
          <div className="flex flex-col lg:col-span-4 gap-4 pt-12 lg:border-r lg:pr-12 lg:border-[#FBF6EA]">
            <p className="text-base font-semibold">{data.sectionTag}</p>
            <h2 className="text-4xl font-bold leading-tight">{data.heading}</h2>
            <h2 className="text-base font-normal">{data.subheading}</h2>
          </div>

          {/* quote */}
          <div className="lg:col-span-5 mr-8 flex justify-between ">
            <div
              key={currentItem.id}
              className="flex flex-col justify-between h-full"
            >
              <p className="text-2xl text-gray-300 font-bold leading-8 mb-4 ">
                {currentItem.quote}
              </p>

              <div className="flex justify-between mt-24 pt-8">
                {/* author */}
                <div className="flex gap-4">
                  <img
                    src={currentItem.avatar}
                    className="w-14 h-14 rounded-full shrink-0 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">{currentItem.author}</p>
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
                    className="p-3 w-12 h-12 rounded-full items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-125 transition-all duration-300"
                  >
                    <MoveLeft className="text-[#232536] group-hover:text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="p-3 w-12 h-12 rounded-full items-center justify-center bg-white group hover:bg-[#FF5959] hover:scale-125 transition-all duration-300"
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
