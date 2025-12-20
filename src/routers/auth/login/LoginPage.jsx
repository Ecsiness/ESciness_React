import { NavLink } from "react-router-dom";
import LoginForm from "./../../../components/auth/LoginForm";
import { FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  return (
    <section className="relative login-bg flex items-center justify-between h-full text-white">
      <div className="absolute top-5 left-5 sm:left-8">
        <NavLink to="/">
          <FaArrowLeft className="size-5" />
        </NavLink>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <img
          src="./../../../../public/assets/images/logo 1.svg"
          alt="logo"
          width={300}
          height={82}
          className="lg:hidden "
        />
        <LoginForm />
      </div>
      <div className="sm:hidden absolute bottom-20 left-1">
        <img
          src="./../../../../public/assets/images/login-mobile.svg"
          width={65}
          height={170}
          alt="login-photo"
        />
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center gap-16 px-12">
        <img
          src="./../../../../public/assets/images/logo 1.svg"
          alt="logo"
          width={300}
          height={82}
        />
        <img
          src="./../../../../public/assets/images/login-photo.svg"
          alt="register-photo"
          width={750}
          height={450}
        />
      </div>
    </section>
  );
}
