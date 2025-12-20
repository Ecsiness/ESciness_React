import Container from "./ui/Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormConsultation } from "../utils/validation/Validation";
import { useNavigate } from "react-router-dom";

const Consulation = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormConsultation),
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };
  return (
    <section className="relative bg-gradient-to-r from-[#F0EBFF] to-[#F6F4FB] consultation-bg h-full py-20">
      <Container>
        {/* circeles of back ground */}
        <div className="absolute lg:left-5 lg:top-48 max-sm:left-1 max-sm:top-60 md:left-5 md:top-50">
          <div className="absolute size-3.5 bg-perpule  rounded-full top-10 -right-7"></div>
          <div className="size-10 bg-perpule  rounded-full mt-4 ml-6"></div>
          <div className="size-24 bg-light-perpule rounded-full mt-2 ml-2 z-10"></div>
        </div>
        {/* content */}
        <h2 className="my-5 md:text-3xl max-sm:text-2xl max-sm:text-center ">
          درخواست مشاوره{" "}
          <span className="text-light-bg-light-perpule">اکسینس</span>
        </h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-10 gap-5"
        >
          <Input
            {...register("title")}
            type="text"
            placeholder="عنوان درخواست شما ..."
            wrapperClassName="lg:w-1/3 md:w-2/3 max-sm:w-4/6 border border-white p-6 rounded-2xl input-bg"
            inputClassName=" placeholder:text-black "
          />
          {errors.title && (
            <span className="font-bold text-sm text-fuchsia-900 md:row-start-2">
              {errors.title.message}
            </span>
          )}
          <textarea
            {...register("content")}
            placeholder="متن درخواست شما..."
            className=" resize-none border border-white rounded-2xl p-3 w-full h-96 input-bg placeholder-black z-50"
          />
          {errors.content && (
            <span className="font-bold text-sm text-fuchsia-900">
              {errors.content.message}
            </span>
          )}
          <Button className="lg:w-1/6 p-8 ">ثبت درخواست</Button>
        </form>
      </Container>
    </section>
  );
};

export default Consulation;
