import { Button } from "./button";
import {
  FaAlignJustify,
  FaTimes,
  FaHome,
  FaStore,
  FaRegStar,
  FaFileAlt,
  FaUserFriends,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  //   const pathName = usePathname();
  const pathName = 1;
  return (
    <>
      {openMenu && (
        <div
          className="fixed inset-0 max-sm:bg-black/5 max-sm:backdrop-blur-sm z-30 max-sm:transition-opacity duration-300"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}
      <nav className=" relative h-28 lg:px-10 max-sm:m-auto max-sm:px-5 flex items-center justify-between shadow-xl z-50 ">
        <button className="sm:hidden" onClick={() => setOpenMenu(true)}>
          <FaAlignJustify className="size-6" />
        </button>
        <div className="flex items-center justify-center">
          <img
            src="../../../public/assets/images/logo 1.svg"
            width={128}
            height={150}
            alt="logo-image"
            className="max-sm:w-[120px] mb-3 md:w-32 lg:w-40 mx-8"
          />
        </div>
        <ul className="flex items-center justify-center gap-5 max-sm:hidden max-md:text-[10px]">
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
        <div>
          <Button className="group relative  overflow-hidden overflow-x-hidden hover:text-light-perpule lg:w-54 h-14 max-sm:w-28 max-sm:h-10 max-sm:p-2 max-sm:text-[9px] md:w-32 md:text-xs lg:text-xl">
            <span className="relative z-10 ">
              {/* <Link href="/auth/register">ثبت نام</Link> | */}
              {/* <Link href="/auth/login"> ورود</Link> */}
            </span>
            <span class="absolute inset-0 overflow-hidden rounded-md">
              <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </Button>
        </div>

        <div
          className={`fixed right-0 top-0 h-full w-58 border-4 sm:hidden border-white bg-light-perpule text-white flex flex-col items-start p-6 rounded-l-[150px] z-40 shadow-2xl transition-transform duration-300 ease-in-out transform ${
            openMenu ? "translate-x-0" : "translate-x-full "
          }`}
        >
          <div className="flex items-center justify-between w-full mb-10">
            <h2 className="text-2xl font-bold mt-20 text-black tracking-[7px]">
              EXINESS
            </h2>
          </div>

          {/* Menu Items */}
          <div className="flex items-center justify-center ">
            <ul className="space-y-10 space-x-10 text-xl w-48">
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaHome className="size-8" />
                {/* <Link href="/">صفحه اصلی</Link> */}
              </li>
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/services" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaStore className="size-8" />
                {/* <Link href="/services">خدمات</Link> */}
              </li>
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/simple" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaRegStar className="size-8" />
                {/* <Link href="/simple">نمونه کار</Link> */}
              </li>
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/weblog" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaFileAlt className="size-8" />
                {/* <Link href="/weblog">وبلاگ</Link> */}
              </li>
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/about" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaUserFriends className="size-8" />
                {/* <Link href="/about">درباره ما</Link> */}
              </li>
              <li
                className={`flex items-center gap-3 ${
                  pathName === "/contact" &&
                  "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-light-perpule after:to-white"
                }`}
              >
                <FaPhoneAlt className="size-8" />
                {/* <Link href="/contact">تماس با ما</Link> */}
              </li>
            </ul>
            <div
              className={`-mr-6 p-5 bg-light-perpule rounded-l-full sm:hidden ${
                !openMenu && "hidden"
              }`}
            >
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={() => setOpenMenu(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
