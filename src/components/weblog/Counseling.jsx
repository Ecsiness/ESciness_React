import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormCounsel } from "../../utils/validation/Validation";

const CounselingSection = () => {
  //   const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormCounsel),
  });
  const onSubmit = (data) => {
    console.log(data);
    // router.refresh();
  };
  return (
    <div className="bg-perpule lg:mx-[68px] lg:p-10 rounded-4xl my-40 max-sm:w-full max-sm:p-5 max-md:p-10 md:p-5 ">
      <div className="text-white max-sm:text-center">
        <h2 className="lg:text-4xl text-center p-10">
          مشاوره رایگان <span className="text-[#D4C2EF]">اکسینس</span>
        </h2>
        <p className="text-sm max-sm:text-[10px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10 "
      >
        <Input
          {...register("fName")}
          wrapperClassName="bg-white drop-shadow-2xl rounded-2xl p-3"
          inputClassName=" placeholder:text-perpule"
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        {errors.fName && (
          <span className="font-bold text-sm text-fuchsia-900 md:row-start-2">
            {errors.fName.message}
          </span>
        )}
        <Input
          {...register("phone")}
          wrapperClassName="bg-white drop-shadow-2xl rounded-2xl p-3"
          inputClassName=" placeholder:text-perpule"
          type="text"
          placeholder="شماره موبایل"
        />
        {errors.phone && (
          <span className="font-bold text-sm text-fuchsia-900 md:col-start-2">
            {errors.phone.message}
          </span>
        )}
        <textarea
          {...register("content")}
          className="bg-white resize-none drop-shadow-2xl placeholder:text-perpule rounded-2xl p-3 h-40 md:col-span-2"
          placeholder="پیغام خود را وارد کنید ..."
        />
        {errors.content && (
          <span className="font-bold text-sm text-fuchsia-900">
            {errors.content.message}
          </span>
        )}
        <Button className="bg-yellow rounded p-2 text-2xl font-bold">
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default CounselingSection;
