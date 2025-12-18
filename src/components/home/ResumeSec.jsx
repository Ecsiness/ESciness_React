import { Button } from "../ui/button";

const ResumeSec = () => {
  return (
    <section className="my-40">
      <h2 className="text-4xl text-center mb-10">
        روزمه کاری <span className="text-light-perpule">اکسینس</span>
      </h2>
      <div className="flex items-end max-sm:justify-center max-sm:items-center min-md:flex-col lg:flex-row">
        <img
          src="../../../public/assets/images/resume-section-img 1.svg"
          className="max-sm:hidden min-md:w-full bg-light-perpule rounded-tl-4xl"
          width={650}
          height={400}
          alt="ecsiness-pic"
        />
        <div className="bg-[#F5F5F5] border lg:rounded-tl-4xl max-md:rounded-bl-4xl p-10 flex flex-col gap-3 lg:items-start md:h-[360px] max-sm:bg-light-perpule max-sm:text-white max-sm:text-center max-sm:rounded-t-4xl max-sm:w-80 md:text-sm ">
          <h3 className="text-2xl">درباره اکسینس</h3>
          <p className="font-thin my-5 text-start">
            اکسینس با تجربه‌ای نزدیک به دو سال فعالیت حرفه‌ای در زمینه مشاوره و
            توسعه کسب‌وکارها، هم‌اکنون در سه لاین تخصصی نرم‌افزار، شتاب‌دهنده، و
            مشاوره به شما عزیزان خدمات خود را ارائه می‌دهد. این شرکت به‌طور رسمی
            با نام کیان ایده اکسین ثبت شده و با تکیه بر تخصص و توانمندی‌های تیم
            مجرب خود، راه‌حل‌های نوآورانه و اثرگذار برای شرکت‌ها و استارتاپ‌های
            مختلف را فراهم می‌کند. اکسینس در حال حاضر با ارائه خدمات مشاوره‌ کسب
            و کار به صورت حضوری و مجازی در نقاط مختلف کشور همراه شما در مسیر رشد
            و موفقیت خواهد بود.
          </p>
          <Button className="p-6 max-sm:bg-[#ffffff] max-sm:text-black min-md:w-60 md:text-sm lg:w-2/3">
            مشاهده رزومه اکسینس
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSec;
