import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CgArrowTopLeftO } from "react-icons/cg";

const BlogCard = () => {
  return (
    <div className="flex flex-col lg:size-80 rounded-4xl shadow-2xs border max-sm:mt-10 hover:shadow-2xl transition-all duration-200 hover:-translate-y-2">
      <img
        src="../../../public/assets/images/blog-page-01.png.svg"
        width={320}
        height={160}
        className="object-cover h-40 w-80 rounded-t-4xl"
        alt="blog-card-image"
      />
      <div className="flex flex-col items-center justify-center gap-5 mt-4">
        <h2>عنوان مطلب</h2>
        <p>توضیح کوتاه درباره مطلب</p>
        <Button variant="link" className="text-perpule group">
          <Link to={`/weblog/id`}>ادامه مطلب</Link>
          <span className="transition-transform duration-300 group-hover:rotate-90">
            <CgArrowTopLeftO />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
