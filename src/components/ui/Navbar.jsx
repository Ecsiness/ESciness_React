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
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "صفحه اصلی", href: "/", current: true },
  { name: "خدمات", href: "/services", current: false },
  { name: "نمونه کار ها", href: "/simple", current: false },
  { name: "وبلاگ", href: "/weblog", current: false },
  { name: "درباره ما", href: "/about", current: false },
  { name: "تماس باما", href: "/contact", current: false },
];

const navItems = [
  { to: "/", icon: <FaHome className="size-8" />, label: "صفحه اصلی" },
  { to: "/services", icon: <FaStore className="size-8" />, label: "خدمات" },
  { to: "/simple", icon: <FaRegStar className="size-8" />, label: "نمونه کار" },
  { to: "/weblog", icon: <FaFileAlt className="size-8" />, label: "وبلاگ" },
  {
    to: "/about",
    icon: <FaUserFriends className="size-8" />,
    label: "درباره ما",
  },
  {
    to: "/contact",
    icon: <FaPhoneAlt className="size-8" />,
    label: "تماس با ما",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
            src={import.meta.env.BASE_URL + "assets/images/logo-1.svg"}
            width={128}
            height={150}
            alt="logo-image"
            className="max-sm:w-30 mb-3 md:w-32 lg:w-40 mx-8"
          />
        </div>
        <ul className="flex items-center justify-center gap-5 max-sm:hidden max-md:text-[10px]">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                // className={classNames(

                // )}
                className={({ isActive }) =>
                  `${isActive ? "text-perpule font-bold" : undefined}`
                }
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Button className="group relative  overflow-hidden overflow-x-hidden hover:text-light-perpule lg:w-54 h-14 max-sm:w-28 max-sm:h-10 max-sm:p-2 max-sm:text-[9px] md:w-32 md:text-xs lg:text-xl">
            <span className="relative z-10 ">
              <Link to="/auth/register">ثبت نام</Link> |
              <Link to="/auth/login"> ورود</Link>
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
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
          <div className="flex items-center justify-center overflow-hidden">
            <ul className="space-y-5 space-x-10 text-xl w-48 overflow-hidden">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 ${
                        isActive
                          ? "relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-linear-to-r after:from-light-perpule after:to-white"
                          : ""
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
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