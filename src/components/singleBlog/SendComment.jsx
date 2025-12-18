import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SendComment = () => {
  return (
    <section className="my-40">
      <h2 className="font-extrabold text-2xl text-[#410081] my-5 max-sm:text-xl">
        نظر خودتان را در مورد این مقاله بیان کنید:
      </h2>
      <form className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        <Input
          wrapperClassName="p-4 inset-shadow-2xs bg-[#D9D9D942]/60 "
          inputClassName="placeholder:text-light-perpule"
          placeholder="نام را وارد کنید"
        />
        <Input
          wrapperClassName="p-4 inset-shadow-2xs bg-[#D9D9D942]/60"
          inputClassName="placeholder:text-light-perpule"
          placeholder="ایمیل را وارد کنید"
        />
        <textarea
          className="p-4 lg:col-span-2 resize-none h-52 placeholder:text-light-perpule inset-shadow-2xs bg-[#D9D9D942]/60 rounded-xl border"
          placeholder="متن خود را وارد کنید"
        />
        <Button className="px-4 md:w-1/2 bg-perpule rounded-md">
          {" "}
          ارسال نظر
        </Button>
      </form>
    </section>
  );
};

export default SendComment;
