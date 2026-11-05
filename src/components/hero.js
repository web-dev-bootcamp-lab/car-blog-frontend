import { Section, Send } from "lucide-react";
import Link from "next/link";

/**
 * @typedef {Object} LatestPost
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} date
 * @property {string} excerpt
 * @property {string} secondaryExcerpt
 * @property {string} image
 * @property {string} ctaText
 * @property {string} slug
 */

export default async function LatestSection({ data }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 my-8 md:my-14 lg:my-20">
      {/* grid wrapper */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* latest-left column */}
        <article id={data.id} className="flex flex-col lg:col-span-7">
          <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000] mb-4">
            Latest
          </h2>

          <div>
            {/* latest-image */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                className="w-full h-auto rounded-lg object-cover"
                src={data.image}
                alt={data.title}
              />
            </div>
            {/* latest-metadata */}
            <div className="text-sm text-gray-600 mb-2">
              By <span className="text-[#FF6666]">{data.author}</span>
              <span className="mx-2">|</span>
              <span>{data.date}</span>
            </div>
            {/* latest-title */}
            <div className="mb-2">
              <h2 className="font-bold text-lg md:text-2xl lg:text-2xl">
                {data.title}
              </h2>
            </div>
            {/* latest-text */}
            <div className="mb-4 md:mb-6">
              <p className="leading-relaxed text-sm md:text-xl lg:text-2xl line-clamp-4 md:line-clamp-none">
                {data.excerpt}
              </p>
            </div>
            {/* read-more */}
            <div>
              <Link
                href={data.slug}
                className="flex items-center gap-1 w-fit px-4 py-2 md:px-12 md:py-3 rounded-md md:rounded-lg bg-[#ff595f] text-white font-semibold text-sm md:text-xl cursor-pointer hover:bg-[#f04450] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>

        {/* latest-right column */}
        <article className="lg:col-span-5 flex-col hidden lg:flex">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000]">
              Trending Blog
            </h2>
            <Link
              href={"/blog"}
              className="font-semibold text-sm hover:text-[#FF5959]"
            >
              See All
            </Link>
          </div>

          {/* trending-blogs */}
          <div>
            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white rounded-lg transition-colors">
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By <span className="text-[#FF6666] group-hover:text-white">{data.author}</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              <div>
                <h2 className="font-bold text-lg md:text-2xl lg:text-2xl">
                  {data.title}
                </h2>
              </div>
            </div>

            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white rounded-lg transition-colors">
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By <span className="text-[#FF6666] group-hover:text-white">{data.author}</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              <div>
                <h2 className="font-bold text-lg md:text-2xl lg:text-2xl">
                  {data.title}
                </h2>
              </div>
            </div>

            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white rounded-lg transition-colors">
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By <span className="text-[#FF6666] group-hover:text-white">{data.author}</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              <div>
                <h2 className="font-bold text-lg md:text-2xl lg:text-2xl">
                  {data.title}
                </h2>
              </div>
            </div>

            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white rounded-lg transition-colors">
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By <span className="text-[#FF6666] group-hover:text-white">{data.author}</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              <div>
                <h2 className="font-bold text-lg md:text-2xl lg:text-2xl">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
