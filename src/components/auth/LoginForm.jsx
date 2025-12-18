import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginScema } from "../../utils/validation/Validation";
import { FaCircleInfo } from "react-icons/fa6";
// import { login } from "@/utils/services/authServices";
const LoginForm = () => {
  //   const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginScema),
  });
  const onSubmit = async () => {
    // const res = await login(data)
    alert("وارد شدید !");
    // router.push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="input-bg  bg-white/6 mx-20 border border-white/20 rounded-4xl p-20 max-sm:p-10 md:p-20  max-sm:w-80 w-full max-w-md flex flex-col gap-3 justify-center items-center shadow-lg"
    >
      <h2 className="font-black text-2xl mb-5">به اکسینس خوش آمدید</h2>
      <Input
        placeholder="نام کاربری"
        wrapperClassName="input-auth-bg max-sm:px-5"
        {...register("userName")}
      />
      {errors.userName && (
        <p className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" />
          {errors.userName?.message}
        </p>
      )}
      <Input
        {...register("password")}
        placeholder="رمز عبور"
        inputClassName="border-none "
        type="password"
        wrapperClassName="input-auth-bg"
      />

      {errors.password && (
        <p className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" />
          {errors.password?.message}
        </p>
      )}
      <div className="w-full ">
        {/* <Link href="/">فراموشی رمز عبور</Link> */}
      </div>
      <Button className="text-perpule lg:w-2xs max-sm:w-60 bg-white md:w-48 md:text-xl p-5 mt-5">
        ورود
      </Button>
      {/* <Link href="/auth/register">
        حساب کاربری ندارید؟
        <span className="text-light-perpule underline"> ثبت نام </span> کنید
      </Link> */}
    </form>
  );
};

export default LoginForm;
