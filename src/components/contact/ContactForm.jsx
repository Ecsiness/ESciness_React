import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContactus } from "../../utils/validation/Validation";

const ContactForm = () => {
  //   const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormContactus),
  });
  const onSubmit = async (data) => {
    console.log(data);
    // router.refresh()
  };
  return (
    <div className="bg-light-perpule lg:p-10 rounded-4xl my-20 max-sm:w-full max-sm:p-5  md:p-8 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10 max-md:p-10 "
      >
        <Input
          {...register("fName")}
          wrapperClassName="bg-white drop-shadow-2xl rounded-2xl p-3 "
          inputClassName="placehloder-[#6147A8]"
          type="text"
          placeholder="نام "
        />
        {errors.fName && (
          <span className="font-bold text-sm text-fuchsia-900 md:row-start-2">
            {errors.fName.message}
          </span>
        )}

        <Input
          {...register("lName")}
          wrapperClassName="bg-white drop-shadow-2xl rounded-2xl p-3 "
          inputClassName="placehloder-[#6147A8]"
          type="text"
          placeholder=" نام خانوادگی"
        />
        {errors.lName && (
          <span className="font-bold text-sm text-fuchsia-900 md:col-start-2">
            {errors.lName.message}
          </span>
        )}
        <Input
          {...register("email")}
          wrapperClassName="bg-white drop-shadow-2xl  rounded-2xl p-3 md:col-span-2"
          inputClassName="placehloder-[#6147A8]"
          type="text"
          placeholder="آدرس ایمیل"
        />
        {errors.email && (
          <span className="font-bold text-sm text-fuchsia-900">
            {errors.email.message}
          </span>
        )}
        <Input
          {...register("phone")}
          wrapperClassName="bg-white drop-shadow-2xl  rounded-2xl p-3 md:col-span-2"
          inputClassName="placehloder-[#6147A8]"
          type="text"
          placeholder="شماره موبایل"
        />
        {errors.phone && (
          <span className="font-bold text-sm text-fuchsia-900">
            {errors.phone.message}
          </span>
        )}
        <textarea
          {...register("content")}
          className="bg-white resize-none drop-shadow-2xl placehloder-[#6147A8] rounded-2xl p-3 h-40 md:col-span-2"
          placeholder="پیغام خود را وارد کنید ..."
        />
        {errors.content && (
          <span className="font-bold w-full  text-sm text-fuchsia-900">
            {errors.content.message}
          </span>
        )}
        <Button className="bg-yellow rounded lg:w-1/3 p-4 text-2xl font-bold md:col-span-2">
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
