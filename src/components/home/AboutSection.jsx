import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section className="my-40 ">
      <h2 className="text-center text-3xl my-8 ">
        درباره <span className="text-light-perpule">اکسینس</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={import.meta.env.BASE_URL + "assets/images/about-team-img-2.svg"}
          width={540}
          height={500}
          alt="about-pic"
          className="hidden md:block w-full max-w-125 mx-auto"
        />

        <div className="grid">
          <div className="max-sm:order-last max-sm:text-center max-sm:mb-10">
            <h2 className="text-3xl py-5 ">تجربه و نوآوری در کنار هم</h2>
            <p className="font-normal ">
              اکسینس با تجربه ای نزدیک به دوسال فعالیت حرفه ای در زمینه مشاوره
              وتوسعه کسب و کارها،هم اکنون در سه لاین تخصصی نرم افزار، شتاب
              دهنده،و مشاوره به شما عزیزان خدمات خود را ارائه می دهد.این شرکت به
              طوررسمی با نام کیان ایده اکسین ثبت شده و با تکیه بر تخصص و
              توانمندی های تیم مجرب خود،راه حل های نوآورانه و اثرگذار برای شرکت
              ها و استارتاپ های مختلف را فراهم می کند.اکسینس در حال حاضربا ارائه
              خدمات مشاوره کسب و کار به صورت حضوری ومجازی در نقاط مختلف کشور
              همراه شما در مسیر رشد و موفقیت خواهد بود.
            </p>
          </div>

          <div className="grid max-sm:items-center my-10 text-center max-sm:grid-cols-2  max-sm:order-1">
            <img
              src={import.meta.env.BASE_URL + "assets/images/about-team-img-2.svg"}
              width={100}
              height={150}
              alt="about-pic"
              className="sm:hidden max-sm:size-96"
            />
            <div className="flex items-center justify-center lg:gap-5 my-10 text-center max-sm:flex-col max-sm:gap-10">
              <div>
                <p className="text-4xl max-sm:text-3xl max-sm:text-md">
                  <span className="text-light-perpule">+</span>400
                </p>
                <p className="font-normal">پروپوزال های تحقیقاتی</p>
              </div>
              <div>
                <p className="text-4xl max-sm:text-3xl max-sm:textsdm">
                  <span className="text-light-perpule">+</span>90
                </p>
                <p className="font-normal">پروژه های در حال اجرا</p>
              </div>
              <div>
                <p className="text-4xl max-sm:text-3xl max-sm:text-md">
                  <span className="text-light-perpule">+</span>150
                </p>
                <p className="font-normal">پروژه های موفق</p>
              </div>
            </div>
          </div>
          <Button className="max-sm:order-last max-sm:text-sm p-8 lg:w-2/3 ">
            <Link to="/consulation">برای دریافت مشاوره رایگان کلیک کنید.</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;