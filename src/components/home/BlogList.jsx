import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";
const BlogList = () => {
  return (
    <section className="my-40">
      <div className="flex items-center justify-between mb-5 max-sm:flex-col max-sm:gap-10">
        <h2 className="text-3xl max-sm:text-xl">
          آخرین مقالات <span className="text-light-perpule">اکسینس</span>
        </h2>
        <Button className="group relative overflow-hidden overflow-x-hidden hover:text-light-perpule p-8 ">
          <span className="relative z-10 ">
            <Link to="/weblog"> مشاهده بیشتر</Link>
          </span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
          </span>
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 items-center justify-center gap-5 md:grid-cols-2 max-sm:grid-cols-1 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default BlogList;
