import { NavLink } from "react-router-dom";
import RegisterForm from "../../../components/auth/RegisterForm";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="relative register-bg h-full  text-white flex items-center lg:justify-between p-10">
      <div className="absolute top-5 left-5 sm:left-8">
        <NavLink to="/">
          <FaArrowLeft className="size-5" />
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 px-4 w-full sm:px-8">
        <img
          src="./../../../../public/assets/images/logo 1.svg"
          alt="logo"
          width={300}
          height={82}
          className="lg:hidden"
        />
        <RegisterForm />
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center gap-16 px-12">
        <img
          src="./../../../../public/assets/images/logo 1.svg"
          alt="logo"
          width={300}
          height={82}
        />
        <img
          src="./../../../../public/assets/images/register-photo.svg"
          alt="register-photo"
          width={950}
          height={450}
        />
      </div>
    </section>
  );
}
