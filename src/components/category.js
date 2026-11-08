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
    <section className="w-full px-4 sm:px-6 lg:px-12 my-8 md:my-14 lg:my-16">
      {/* section-header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000]">
          Category
          <span className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000] pl-2">
            —
          </span>
        </h2>
        <Link
          href={"/blog"}
          className="font-semibold text-sm hover:text-[#FF5959]"
        >
          See All
        </Link>
      </div>

      {/* category-cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-full min-w-0 p-4 bg-[#F4F0F8] rounded-lg group items-center text-center"
          >
            {/* post-image */}
            <Link
              href={item.slug}
              className="mb-4 flex justify-center overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* post-title */}
            <div className="flex flex-col">
              <Link
                href={item.slug}
                className="text-base md:text-xl lg:text-2xl text-black font-bold line-clamp-2 leading-6 mb-2"
              >
                {item.title}
              </Link>
            </div>

            {/* post-text */}
            <div className="flex flex-col">
              <Link
                href={item.slug}
                className="group-hover:text-[#FF5959] text-xs md:text-sm lg:text-base text-[#6D6E76] text-center line-clamp-3 mb-2"
              >
                {item.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
