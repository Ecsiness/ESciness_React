import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section
      className="grid grid-cols-3 grid-rows-4 lg:gap-7 max-sm:gap-3 max-sm:grid-rows-5 max-sm:grid-cols-2 max-sm:text-[10px] max-md:gap-5


    "
    >
      <div className="col-span-3 border grid items-center justify-center md:gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:col-span-2 max-sm:p-3">
        <h1 className="text-center text-4xl max-sm:text-[16px]">
          خدمات <span className="text-light-perpule"> مشاوره ای </span>اکسینس
        </h1>
        <p className="font-normal ">
          تیم حرفه ای ما طیف گسترده ای از خدمات را ارائه میدهد.
        </p>
        <Button className="w-48 m-auto p-6">
          <Link to="/consulation">دریافت مشاوره</Link>
        </Button>
      </div>
      <div className="col-span-1 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/management.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره مدیریت</h2>
        </div>
        <p className="font-normal">
          ارائه راهکارهای جامع برای بهینه سازی فرآیندهای مدیریتی وارتقای
          عملکردسازمان ها با تمرکز بر بهبود استراتژی ها و افزایش کارایی تیم ها
        </p>
      </div>
      <div className="col-span-1 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/Marketing.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره بازریابی</h2>
        </div>
        <p className="font-normal">
          طراحی برنامه ها و استراتژی های موثر بازاریابی برای جذب مشتریان هدف،
          تقویت برندو بهینه سازی کمپین های تبلیغاتی بر اساس تحلیل بازار و رفتار
          مصرف کننده
        </p>
      </div>
      <div className="col-span-1 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:col-span-2 max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/Financial.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره منابع مالی و حسابداری</h2>
        </div>
        <p className="font-normal">
          کمک به کسب و کارها در مدیریت منابع مالی، تحلیل هزینه ها و درآمدها و
          ارائه راهکارهایی برای تحلیل هزینه ها و درآمدها و ارائه راهکارهایی برای
          بهینه سازی ساختار مالی و کاهش ریسک های مالی
        </p>
      </div>
      <div className="col-span-1 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/HR.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره منابع انسانی</h2>
        </div>
        <p className="font-normal">
          پشتیبانی از کسب و کارها در جذب، توسعه و مدیریت نیروی انسانی، بهینه
          سازی ساختارهای سازمانی وایجاد سیستم های ارزیابی عملکرد و انگیزشی
        </p>
      </div>
      <div className="col-span-2 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:col-span-1 max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/Information-Technology.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره فناوری اطلاعات</h2>
        </div>
        <p className="font-normal">
          ارئه راهکارهای نوین فناوری اطلاعات برای بهبود زیر ساخت های دیجیتال،
          افزایش امنیت داده ها و بهینه سازی فرآیندهای کسب و کار در محیط دیجیتال
        </p>
      </div>
      <div className="col-span-2 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:col-span-1 max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/Investment.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره منابع سرمایه گذاری</h2>
        </div>
        <p className="font-normal">
          ارائه تحلیل های دقیق و راهکارهای استراتژیک برای انتخاب بهترین فرصت های
          سرمایه گذاری، مدیریت ریسک ها و افزایش بازده سرمایه
        </p>
      </div>
      <div className="col-span-1 border grid items-center justify-center gap-5 md:p-10 bg-stone-100 rounded-4xl max-sm:p-3 max-md:p-5">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={import.meta.env.BASE_URL + "assets/icons/servicesicon/Invention.svg"}
            width={40}
            height={40}
            alt="manegment-icon"
            className="size-10"
          />
          <h2>مشاوره ثبت اختراع</h2>
        </div>
        <p className="font-normal">
          راهنمایی کامل برای ثبت اختراعات، حمایت از مالکیت فکری و کمک به تجاری
          سازی ایده های نوآورانه در بازار
        </p>
      </div>
    </section>
  );
};

export default Services;