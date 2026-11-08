import Carousel from "./Carousel";
import Link from "next/link";

export default async function NewTechSection({ data }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 my-8 md:my-14 lg:my-16">
      {/* section-header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000]">
          New Technology
          <span className="text-lg md:text-2xl lg:text-2xl font-bold text-[#000000] pl-1">—</span>
        </h2>
        <Link
          href={"/blog"}
          className="font-semibold text-sm hover:text-[#FF5959]"
        >
          See All
        </Link>
      </div>

      {/* newTech-cards */}
      <Carousel data={data} />

      <hr className="mt-12 md:mt-16 border-0 h-px bg-[#2325364D]" />
    </section>
  );
}
