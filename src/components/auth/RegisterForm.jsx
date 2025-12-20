import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/validation/Validation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
// import { register } from "@/utils/services/authServices";
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register: formRegister,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      acceptTerms: false,
    },
  });

  const onSubmit = async () => {
    // const res = await register(data)
    alert("ثبت نام با موفقیت انجام شد");
    navigate("/auth/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md input-bg border border-white/30 rounded-4xl p-20 flex flex-col gap-3 justify-end items-center shadow-lg max-sm:w-96 max-sm:p-10 max-sm:py-20"
    >
      <Input
        {...formRegister("fName")}
        placeholder="نام"
        wrapperClassName="input-auth-bg"
      />
      {errors.fName && (
        <span className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" /> {errors.fName.message}
        </span>
      )}
      <Input
        {...formRegister("lName")}
        placeholder="نام خانوادگی"
        wrapperClassName="input-auth-bg"
      />
      {errors.lName && (
        <span className=" flex gap-2 items-center font-bold w-full  text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" /> {errors.lName.message}
        </span>
      )}
      <Input
        {...formRegister("email")}
        placeholder="ایمیل"
        wrapperClassName="input-auth-bg"
      />
      {errors.email && (
        <span className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" /> {errors.email.message}
        </span>
      )}
      <Input
        {...formRegister("phone")}
        placeholder="شماره همراه"
        wrapperClassName="input-auth-bg"
      />
      {errors.phone && (
        <span className=" flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" /> {errors.phone.message}
        </span>
      )}
      <Input
        {...formRegister("userName")}
        placeholder="نام کاربری"
        wrapperClassName="input-auth-bg"
      />
      {errors.userName && (
        <span className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" />{" "}
          {errors.userName.message}
        </span>
      )}

      <Input
        {...formRegister("password")}
        placeholder="رمز عبور"
        inputClassName="border-none "
        type={"password"}
        wrapperClassName="input-auth-bg"
      />
      {errors.password && (
        <span className="flex gap-2 items-center font-bold w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" />
          {errors.password.message}
        </span>
      )}

      <div className="flex items-center justify-start gap-3 w-full">
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field }) => (
            <>
              {/* change to boolean value to validation work */}
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(!!checked)}
              />
              <label className="text-sm">
                با شرایط و قوانین اکسینس موافق هستم
              </label>
            </>
          )}
        />
      </div>
      {errors.acceptTerms && (
        <span className="flex gap-2 items-center font-thin w-full text-sm text-fuchsia-900">
          <FaCircleInfo className="size-4 font-bold" />
          {errors.acceptTerms.message}
        </span>
      )}
      <Button className="text-perpule lg:w-2xs max-sm:w-52 bg-white max-md:w-48 md:text-xl p-5  mt-5">
        ثبت نام
      </Button>
    </form>
  );
};

export default RegisterForm;
