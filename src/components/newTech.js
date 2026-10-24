import { Section, Send } from "lucide-react";
import Link from "next/link";

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

export default async function NewTechSection({ data }) {
  return (
    <>
      {/* section-header */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-[#000000] mb-4">
          New Technology
          <span className="text-2xl font-bold text-[#000000] pl-1">—</span>
        </h2>
        <Link
          href={"/blog"}
          className="font-semibold text-sm hover:text-[#FF5959]"
        >
          See All
        </Link>
      </div>

      {/* newTech-cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 -m-2 ">
        {data.map((data) => (
          <div
            key={data.id}
            className="flex flex-col h-full min-w-0 p-3 bg-[#F4F0F8] rounded-lg group"
          >
            {/* post-image */}
            <Link
              href={data.slug}
              className="mb-4 block overflow-hidden rounded-lg w-full"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-40 rounded-lg object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* post-text */}
            <div className="flex flex-col">
              <Link
                href={data.slug}
                className="group-hover:text-[#FF5959] font-semibold text-lg  line-clamp-2 leading-6 mb-6"
              >
                {data.title}
              </Link>
            </div>

            {/* post-metadata */}
            <div className="flex  items-center gap-4 mt-auto">
              <img
                src={data.authorAvatar}
                className="w-12 h-12 rounded-full shrink-0 object-cover"
              />

              <div className="flex-1">
                <p className="text-base font-semibold text-[#2B2C34]">
                  {data.author}
                </p>

                <div className="flex gap-4">
                  <p className="text-sm text-[#2B2C34]">{data.date}</p>
                  <span className="text-base text-[#2B2C34]">•</span>
                  <p className="text-sm text-[#2B2C34]">{data.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-16 border-0 h-px  bg-[#2325364D]" />
    </>
  );
}
