import { Section, Send } from "lucide-react";
import Link from "next/link";

/**
 * @typedef {object} Category
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string} slug
 */

export default async function CategorySection({ data }) {
  return (
    <>
      {/* section-header */}
      <div className="flex justify-between md:mt-4 lg:mt-4 md:mx-4">
        <h2 className="md:text-2xl lg:text-2xl font-bold text-[#000000] my-8">
          Category
          <span className="text-lg lg:text-2xl md:text-2xl font-bold text-[#000000] pl-2">
            —
          </span>
        </h2>
        <Link
          href={"/blog"}
          className="font-semibold text-sm hover:text-[#FF5959] mt-8"
        >
          See All
        </Link>
      </div>

      {/* newTech-cards */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 md:gap-6 lg:gap-12 md:mx-6 lg:-m-2 mb-8">
        {data.map((data) => (
          <div
            key={data.id}
            className="flex flex-col h-full min-w-0 p-3 md:p-3 lg:p-3 bg-[#F4F0F8] rounded-lg group items-center"
          >
            {/* post-image */}
            <Link
              href={data.slug}
              className="mb-4 flex justify-center overflow-hidden rounded-lg "
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* post-title */}
            <div className="flex flex-col">
              <Link
                href={data.slug}
                className="lg:text-2xl md:text-2xl text-black font-bold line-clamp-2 leading-6 mb-2 lg:mb-6 md:mb-6"
              >
                {data.title}
              </Link>
            </div>

            {/* post-text */}
            <div className="flex flex-col">
              <Link
                href={data.slug}
                className="group-hover:text-[#FF5959] font-base text-sm md:text-lg lg:text-xl text-center line-clamp-3   mb-4 lg:mb-6 md:mb-6"
              >
                {data.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
