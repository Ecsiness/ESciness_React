const AboutUs = () => {
  return (
    <>
      <div className="bg-perpule md:rounded-[50px] md:h-80 max-sm:h-36 my-10 text-white text-4xl flex items-center justify-center lg:px-20 max-sm:rounded-3xl">
        <h2>درباره ما</h2>
      </div>
      <div className="flex max-sm:flex-col-reverse items-center md:justify-around lg:my-40">
        <div className="md:w-xl max-sm:w-11/12 lg:h-80 z-40 border-8 bg-stone-100 border-[#9C88D15E] p-5 md:-ml-5 max-sm:-mt-5 rounded-4xl">
          <h3 className="font-bold text-2xl px-5">درباره اکسینس</h3>
          <p className="font-light text-sm  p-5 ">
            اکسینس یک شرکت مشاوره‌ ی کسب و کار است که با هدف ارائه خدمات مشاوره
            تخصصی در حوزه های مختلف، در حدود کمتر از دو سال شکل گرفته و حدود یک
            <br /> سال است که به‌صورت رسمی شرکت آن با نام کیان ایده اکسین ثبت
            شده است. این شرکت در حال حاضر در سه لاین تخصصی فعالیت می‌کند:
            <br />
            <br /> 1. لاین نرم‌افزار
            <br /> 2. لاین شتاب‌دهنده (حمایت از استارتاپ‌ها و کسب‌وکارهای نوپا)
            <br /> 3. لاین مشاوره (ارائه خدمات مشاوره در حوزه‌های مختلف)
          </p>
        </div>
        <div className=" p-2 z-10 rounded-4xl ">
          <img
            src="../../../public/assets/images/about-page/about-img.svg"
            width={560}
            height={320}
            alt="about-image max-sm:"
          />
        </div>
      </div>
      <div className="my-40 text-center ">
        <h2 className="text-light-perpule text-4xl underline py-10">تیم ما</h2>
        <p>
          تا به امروز اکسینس در بیش از ۲۵ استارتاپ و کسب‌وکار نوپا، ۱۵ کسب‌وکار
          میان‌رده و ۱۰ شرکت سرمایه‌گذاری فعالیت کرده است. همچنین مشاوره برای
          بیش از ۱۱ پروژه تحقیقاتی و ۲ پروژه بین‌المللی از دیگر دستاوردهای ماست.
          به علاوه تیم ما در فرآیند ثبت اختراع و مارکتینگ کسب‌وکارها نیز نقش
          مؤثری ایفا کرده است.
        </p>
      </div>
      <div className="my-40 flex items-center justify-center gap-10 max-sm:flex-col-reverse">
        <div className="md:w-2xl  bg-stone-100 border rounded-3xl p-5">
          <li className="lg:text-3xl md:text-xl my-5">پروژه های برجسته</li>
          <p className="md:text-lg">
            تا به امروز اکسینس در بیش از ۲۵ استارتاپ و کسب‌وکار نوپا، ۱۵
            کسب‌وکار میان‌رده و ۱۰ شرکت سرمایه‌گذاری فعالیت کرده است. همچنین
            مشاوره برای بیش از ۱۱ پروژه تحقیقاتی و ۲ پروژه بین‌المللی از دیگر
            دستاوردهای ماست. به علاوه تیم ما در فرآیند ثبت اختراع و مارکتینگ
            کسب‌وکارها نیز نقش مؤثری ایفا کرده است. می‌کنیم تا با بالاترین کیفیت
            و کمترین هزینه رشد کنند.
          </p>
          <div className="flex items-center justify-center lg:gap-15 my-10 text-center max-sm:flex-col max-sm:gap-10">
            <div>
              <p className="text-4xl max-sm:text-3xl max-sm:text-md">
                <span className="text-light-perpule">+</span>5K
              </p>
              <p className="font-normal">مشتریان فعال</p>
            </div>
            <div>
              <p className="text-4xl max-sm:text-3xl max-sm:textsdm">
                <span className="text-light-perpule">+</span>200
              </p>
              <p className="font-normal">پروژه های موفق</p>
            </div>
            <div>
              <p className="text-4xl max-sm:text-3xl max-sm:text-md">
                <span className="text-light-perpule">+</span>100
              </p>
              <p className="font-normal">مشتریان راضی</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="../../../public/assets/images/about-page/project-img.svg"
            width={672}
            height={500}
            alt="Services"
            className="w-2xl lg:h-125 -mt-10"
          />
        </div>
      </div>
      <div className="my-40 flex max-sm:flex-col items-center justify-center gap-10">
        <div>
          <img
            src="../../../public/assets/images/about-page/services-img.svg"
            width={672}
            height={500}
            alt="Services"
            className="w-2xl lg:h-125 -mt-10"
          />
        </div>
        <div className="md:w-2xl  lg:h-96  bg-stone-100 border rounded-3xl p-5">
          <li className="lg:text-3xl md:text-xl my-5">خدمات ما</li>
          <p className="md:text-lg">
            اکسینس به‌عنوان یکی از پیشروترین شرکت‌های مشاوره محور، از مرحله
            ایده‌پردازی تا اجرای کامل پروژه خدمات جامعی را ارائه می‌دهد. ما در
            تمامی مراحل از جمله ایده‌پردازی، تحلیل، طراحی ساختار، جذب
            سرمایه‌گذار و تأمین منابع انسانی تا اجرا و توسعه در کنار کسب و کارها
            فعالیت می‌کنیم. همچنین با ایجاد یک شبکه‌ای قوی از ارتباطات با
            شرکت‌ها، استارتاپ‌ها، تولیدکنندگان و افراد متخصص، به کسب‌وکارها کمک
            می‌کنیم تا با بالاترین کیفیت و کمترین هزینه رشد کنند.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
