import { Send } from "lucide-react";
import Link from "next/link";
import blogData from "@/data/blogData.json";
import LatestSection from "@/components/hero";
import NewTechSection from "@/components/newTech";
import CategorySection from "@/components/category";
import TestimonialSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-fit flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="hero-img absolute inset-0 top-20">
          <img
            className="w-full h-[78.5%] object-cover"
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="absolute inset-0 w-full h-[78.5%] bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* hero content */}
        <div className="hero-text relative z-10 text-white flex flex-col justify-center px-6 gap-8">
          <strong className="max-w-3xl text-left text-white text-6xl font-bold leading-tight">
            Your Journey <br /> Your Car <br />
            Your Way
          </strong>
          <p className="text-lg max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
            elementum vel euismod aliquam. Amet ultrices neque augue consectetur
            purus phasellus. Ullamcorper lorem montes varius amet vestibulum
            tellus facilisis consequat pretium. Et faucibus laoreet molestie
            diam semper fames diam eget.
          </p>
          <button
            type="submit"
            className="flex items-center gap-1 w-fit px-6 py-3 rounded-md border border-none bg-[#ff595f] text-white font-semibold text-xl cursor-pointer hover:bg-[#f04450]"
          >
            Subscribe <Send className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* @param {{data: LatestPost}} props */}
      <LatestSection data={blogData.latestPost} />

      {/* @param {{data: NewTech}} props */}
      <NewTechSection data={blogData.newTechnology} />

      {/* @param {{data: Category}} props */}
      <CategorySection data={blogData.categories} />

      {/* @param {{data: Testimonial}} props */}
      <TestimonialSection data={blogData.testimonials} />

      {/* @param {{data: NewTech}} props */}
      <NewTechSection data={blogData.newTechnologyRow2} />
    </>
  );
}
