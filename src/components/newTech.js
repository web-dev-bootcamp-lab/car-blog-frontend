import Carousel from "./Carousel";
import Link from "next/link";

export default async function NewTechSection({ data }) {
  return (
    <>
      {/* section-header */}
      <div className="flex justify-between sm:mx-4 sm:pt-6">
        <h2 className="md:text-2xl text-lg lg:text-2xl font-bold text-[#000000] mb-4">
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
      <Carousel data={data} />

      <hr className="mt-16 border-0 h-px  bg-[#2325364D]" />
    </>
  );
}
