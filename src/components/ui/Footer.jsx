import { Button } from "./button";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  //   const pathName = usePathname();
  const pathName = 1;
  return (
    <footer className="bg-BgFooter rounded-t-4xl h-[647px] max-sm:h-[1300px]  max-md:h-[1300px] p-10">
      <section className="flex items-center justify-between p-5 max-sm:flex-col max-md:flex-col">
        <div>
          <img
            src="../../../public/assets/images/logo 1.svg"
            alt="logo-image"
            className=" mb-3 max-sm:order-1 "
            width={200}
            height={30}
          />
        </div>
        <Button className="md:hidden w-full p-5 my-10">لینک صفحات</Button>
        <ul className="flex items-center justify-center gap-5 max-sm:flex-col max-sm:order-2 max-md:flex-col ">
          <li className={pathName === "/" && "text-perpule font-bold"}>
            {/* <Link href="/">صفحه اصلی</Link> */}
          </li>
          <li className={pathName === "/services" && "text-perpule font-bold"}>
            {/* <Link href="/services">خدمات</Link> */}
          </li>
          <li className={pathName === "/simple" && "text-perpule font-bold"}>
            {/* <Link href="/simple">نمونه کار ها</Link> */}
          </li>
          <li className={pathName === "/weblog" && "text-perpule font-bold"}>
            {/* <Link href="/weblog">وبلاگ</Link> */}
          </li>
          <li className={pathName === "/about" && "text-perpule font-bold"}>
            {/* <Link href="/about">درباره ما</Link> */}
          </li>
          <li className={pathName === "/contact" && "text-perpule font-bold"}>
            {/* <Link href="/contact">تماس باما</Link> */}
          </li>
        </ul>
        <div className="flex items-center justify-center gap-2 max-sm:hidden max-md:hidden ">
          <FaInstagram className="text-red-500 size-6" />
          <FaFacebook className="text-blue-600 size-6" />
          <FaLinkedin className="text-blue-600 size-6" />
          <FaXTwitter className="size-6" />
          <FaYoutube className="text-red-500 size-6" />
          <FaTelegram className="text-blue-600 size-6" />
        </div>
      </section>
      <section className="mt-10 flex items-end justify-between max-sm:items-center max-sm:flex-col max-md:flex-col max-sm:gap-5 ">
        <Button className="md:hidden w-full p-5 my-10">ارتباط با ما</Button>
        <div className="my-5 ">
          <h2 className="bg-light-perpule p-2 text-white mb-5 w-28 max-md:hidden rounded-2xl">
            ارتباط با ما:
          </h2>
          <p>آدرس:البرز،کرج،گلشهرویلا ،بلوار مصطفی خمینی ،مجتمع کسری</p>
          <p className="py-5">ایمیل : infoexiness@gmail.com</p>
          <p>تماس : 09365008696</p>
        </div>
        {/* social icons for mobile responsive */}
        <div className="flex items-center justify-center gap-5 md:hidden">
          <FaInstagram className="text-red-500 size-6" />
          <FaFacebook className="text-blue-600 size-6" />
          <FaLinkedin className="text-blue-600 size-6" />
          <FaXTwitter className="size-6" />
          <FaYoutube className="text-red-500 size-6" />
          <FaTelegram className="text-blue-600 size-6" />
        </div>
        <div className="flex items-center justify-center lg:gap-10 bg-white rounded-2xl md:p-4 lg:p-7 max-sm:p-4 max-md:gap-3 max-sm:gap-2 max-sm:mt-5 max-md:mt-10 max-md:p-8">
          <input
            type="email"
            placeholder="ایمیل"
            className="lg:p-5 max-sm:p-2 max-sm:w-40 rounded-2xl border-2 max-md:p-3 "
          />
          <Button className="lg:p-8 max-sm:p-4 max-sm:text-xs max-sm:rounded-xl lg:rounded-3xl max-md:p-6 max-md:rounded-2xl">
            ارسال پیام
          </Button>
        </div>
      </section>
      <section className="mt-20 border-b-2 border-black  max-sm:text-center">
        <h2 className="text-center lg:text-xl font-bold p-2 max-sm:text-sm ">
          اکسینس تحولی در بـیزنس | EXINESS Revelotion In Business
        </h2>
      </section>
      <div className="text-sm flex gap-10 h-20 lg:items-end justify-center sm:items-start ">
        <p>Privacy Policy</p>
        <p>.ECSINESS.ALLRights Reserved 2023©</p>
      </div>
    </footer>
  );
};

export default Footer;
