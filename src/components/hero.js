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
    <section className="max-w-full mx-auto mt-24">
      {/* grid wrapper */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* latest-left column */}
        <article id={data.id} className="flex flex-col lg:col-span-7">
          <h2 className="text-2xl font-bold text-[#000000] mb-4">Latest</h2>

          <div className="px-4">
            {/* latest-image */}
            <div className="mb-4">
              <img className="" src={data.image} />
            </div>
            {/* latest-metadata */}
            <div className="text-sm text-gray-600 mb-2">
              By <span className="text-[#FF6666]">{data.author}</span>
              <span className="mx-2">|</span>
              <span className="">{data.date}</span>
            </div>
            {/* latest-title */}
            <div className="mb-2">
              <h2 className="font-bold text-2xl">{data.title}</h2>
            </div>
            {/* latest-text */}
            <div className="mb-6">
              <p className="leading-relaxed">{data.excerpt}</p>
            </div>
            {/* read-more */}
            <div>
              <Link
                href={data.slug}
                className="flex items-center gap-1 w-fit px-12 py-3 rounded-lg border border-none bg-[#ff595f] text-white font-semibold text-xl cursor-pointer hover:bg-[#f04450]"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>

        {/* latest-right column */}
        <article className="lg:col-span-5 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-[#000000] mb-4">
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
            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white">
              {/* latest-metadata */}
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By{" "}
                <span className="text-[#FF6666] group-hover:text-white">
                  {data.author}
                </span>
                <span className="mx-2 group-hover:text-white">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              {/* latest-title */}
              <div>
                <h2 className="font-bold text-xl">{data.title}</h2>
              </div>
            </div>

            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white">
              {/* latest-metadata */}
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By{" "}
                <span className="text-[#FF6666] group-hover:text-white">
                  {data.author}
                </span>
                <span className="mx-2 group-hover:text-white">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              {/* latest-title */}
              <div>
                <h2 className="font-bold text-xl">{data.title}</h2>
              </div>
            </div>
            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white">
              {/* latest-metadata */}
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By{" "}
                <span className="text-[#FF6666] group-hover:text-white">
                  {data.author}
                </span>
                <span className="mx-2 group-hover:text-white">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              {/* latest-title */}
              <div>
                <h2 className="font-bold text-xl">{data.title}</h2>
              </div>
            </div>

            <div className="group mb-6 px-4 py-6 hover:bg-[#FF5959] hover:text-white">
              {/* latest-metadata */}
              <div className="text-sm text-gray-600 mb-2 group-hover:text-white">
                By{" "}
                <span className="text-[#FF6666] group-hover:text-white">
                  {data.author}
                </span>
                <span className="mx-2 group-hover:text-white">|</span>
                <span className="group-hover:text-white">{data.date}</span>
              </div>
              {/* latest-title */}
              <div>
                <h2 className="font-bold text-xl">{data.title}</h2>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
