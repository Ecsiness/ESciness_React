import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function BlogBanner() {
  return (
    <>
      <section>
        <div className="relative w-full h-100 bg-[url(/public/assets/images/service-img/img-banner.png)] bg-no-repeat bg-cover rounded-3xl mt-11">
          <div className="h-full w-full absolute flex justify-center z-0">
            <div className="h-full w-2/4 bg-linear-to-r from-transparent via-[#DBE0E8] to-transparent"></div>
          </div>

          <div className="relative z-10 w-1/2 h-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-center text-4xl max-sm:text-base">
              خدمات <span className="text-light-perpule"> مشاوره ای </span>
              اکسینس
            </h1>
            <p className="font-normal text-gray-500">
              تیم حرفه ای ما طیف گسترده ای از خدمات را ارائه میدهد.
            </p>
            <Button className="w-48 p-6 mt-2">
              <Link to="/consulation">دریافت مشاوره</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
