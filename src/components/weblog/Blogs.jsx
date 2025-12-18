import React from "react";
import { FaSearch } from "react-icons/fa";
import BlogCard from "./BlogCard";
import PaginationBlogs from "./PaginationBlogs";
import Comments from "./Comments";
import CounselingSection from "./Counseling";

const Blogs = () => {
  return (
    <section className="mt-10">
      <div
        className="bg-perpule md:rounded-[50px] md:h-80 max-sm:h-36 grid content-center max-sm:justify-items-center md:justify-items-center md:gap-5 max-sm:gap-5 lg:justify-items-end lg:grid-cols-2
       lg:px-20 max-sm:rounded-3xl "
      >
        <h1 className="text-white lg:text-4xl max-sm:text-2xl lg:mr-50 md:text-3xl">
          مقالات اکسینس
        </h1>
        <div className="bg-white md:w-80 md:h-20 max-sm:w-52 flex items-center justify-between p-2 rounded-4xl ">
          <input
            type="text"
            placeholder="جستوجو"
            className="outline-none md:p-5  max-sm:w-40 max-sm:shadow-2xl"
          />
          <FaSearch className="size-6 mx-2 cursor-pointer transition-all duration-300 hover:size-7" />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 max-sm:grid-cols-1 gap-5 md:-mt-20 justify-items-center m-auto xl:w-5xl ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      {/* pagination list */}
      <PaginationBlogs />
      {/* show comments */}
      <Comments />
      {/* Counseling section  */}
      <CounselingSection />
    </section>
  );
};

export default Blogs;
