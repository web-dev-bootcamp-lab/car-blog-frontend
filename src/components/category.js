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
      <div className="flex justify-between mt-4">
        <h2 className="text-2xl font-bold text-[#000000] my-8">
          Category
          <span className="text-2xl font-bold text-[#000000] pl-2">—</span>
        </h2>
        <Link
          href={"/blog"}
          className="font-semibold text-sm hover:text-[#FF5959] mt-8"
        >
          See All
        </Link>
      </div>

      {/* newTech-cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-12 -m-2">
        {data.map((data) => (
          <div
            key={data.id}
            className="flex flex-col h-full min-w-0 p-3 bg-[#F4F0F8] rounded-lg group items-center"
          >
            {/* post-image */}
            <Link
              href={data.slug}
              className="mb-4 flex justify-center overflow-hidden rounded-lg "
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-24 h-24 rounded-full object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* post-title */}
            <div className="flex flex-col">
              <Link
                href={data.slug}
                className="text-2xl text-black font-bold line-clamp-2 leading-6 mb-6"
              >
                {data.title}
              </Link>
            </div>

            {/* post-text */}
            <div className="flex flex-col">
              <Link
                href={data.slug}
                className="group-hover:text-[#FF5959] font-base text-lg text-center line-clamp-3 leading-6 mb-6"
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
