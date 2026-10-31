import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 justify-between mt-20 sm:grid-cols-1 ">
      <div className="grid items-center justify-center text-center max-sm:mb-10 ">
        <h2 className="text-[33px] max-sm:mb-10 sm:text-2xl">
          از
          <span className="text-light-perpule"> ایده </span>
          تا
          <span className="text-light-perpule"> اجرا </span>
          همراه شما
        </h2>
        <div className="lg:text-5xl md:text-2xl font-black row-span-4 hero-shdow max-sm:text-3xl">
          <h1>ECSINESS | اکسینس</h1>
        </div>
        {/* just for mobile responsive */}
        <div className="grid grid-cols-2 gap-1 my-6 sm:hidden w-[240px] m-auto">
          <img
            src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-1.svg"}
            width={150}
            height={200}
            alt="hero-pic"
          />
          <img
            src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-3.svg"}
            width={150}
            height={200}
            alt="hero-pic"
          />
          <img
            src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-4.svg"}
            width={150}
            height={200}
            alt="hero-pic"
          />
          <img
            src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-2.svg"}
            width={150}
            height={200}
            alt="hero-pic"
          />
        </div>
        <div className="py-2 my-2 max-sm:text-2xl">
          <h3>اکسینس همراه هر بیزینس</h3>
          <h3>Ecsiness Your Business Companion</h3>
        </div>
        <div className="flex gap-5 justify-center ">
          <Button className="p-8 max-sm:w-36 lg:w-48 md:text-sm ">
            <Link to="/contact">با ما در ارتباط باشید</Link>
          </Button>

          <Button className="text-light-perpule max-sm:w-36 bg-[#F7F5FF] p-8 lg:w-48 md:text-sm">
            <Link to="/consulation">دریافت مشاوره رایگان</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 max-sm:hidden md:mx-5">
        <img
          src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-1.svg"}
          width={300}
          height={300}
          alt="hero-pic"
        />
        <img
          src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-3.svg"}
          width={300}
          height={300}
          alt="hero-pic"
        />
        <img
          src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-4.svg"}
          width={300}
          height={300}
          alt="hero-pic"
        />
        <img
          src={import.meta.env.BASE_URL + "assets/images/hero-sec/hero-pic-2.svg"}
          width={300}
          height={300}
          alt="hero-pic"
        />
      </div>
    </section>
  );
};

export default HeroSection;