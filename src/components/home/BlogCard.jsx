import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const BlogCard = () => {
  return (
    <div className="rounded-3xl border  transition-all duration-200 hover:-translate-y-2">
      <img
        src={import.meta.env.BASE_URL + "assets/images/blog-page-01.png.svg"}
        width={300}
        height={290}
        alt="blog-pic"
        className="w-full"
      />
      <div className="flex md:flex-col max-sm:justify-around py-5 items-center rounded-b-3xl bg-stone-100 hover:shadow-2xl">
        <h2>مقاله شماره دو</h2>
        <Button className="px-15 text-sm mt-2">
          <Link to="/weblog/id">بیشتر بخوانید</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;