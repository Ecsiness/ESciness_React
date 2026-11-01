export default function BlogService() {
  const services = [
    {
      title: "مشاوره مدیریت",
      description:
        "ارائه راهکارهای جامع برای بهینه سازی فرآیندهای مدیریتی وارتقای عملکردسازمان ها با تمرکز بر بهبود استراتژی ها و افزایش کارایی تیم ها",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-1.png",
    },
    {
      title: "مشاوره بازاریابی",
      description:
        "طراحی برنامه ها و استراتژی های موثر بازاریابی برای جذب مشتریان هدف، تقویت برند و بهینه سازی کمپین های تبلیغاتی بر اساس تحلیل بازار و رفتار مصرف کننده",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-2.png",
    },
    {
      title: "مشاوره منابع مالی و حسابداری",
      description:
        "کمک به کسب و کارها در مدیریت منابع مالی، تحلیل هزینه ها و درآمدها و ارائه راهکارهایی برای تحلیل هزینه ها و درآمدها و ارائه راهکارهایی برای بهینه سازی ساختار مالی و کاهش ریسک های مالی",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-3.png",
    },
    {
      title: "مشاوره منابع انسانی",
      description:
        "پشتیبانی از کسب و کارها در جذب، توسعه و مدیریت نیروی انسانی، بهینه سازی ساختارهای سازمانی وایجاد سیستم های ارزیابی عملکرد و انگیزشی",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-4.png",
    },
    {
      title: "مشاوره فناوری اطلاعات",
      description:
        "ارئه راهکارهای نوین فناوری اطلاعات برای بهبود زیر ساخت های دیجیتال، افزایش امنیت داده ها و بهینه سازی فرآیندهای کسب و کار در محیط دیجیتال",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-5.png",
    },
    {
      title: "مشاوره سرمایه گذاری",
      description:
        "ارائه تحلیل های دقیق و راهکارهای استراتژیک برای انتخاب بهترین فرصت های سرمایه گذاری، مدیریت ریسک ها و افزایش بازده سرمایه",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-6.png",
    },
    {
      title: "مشاوره ثبت اختراع",
      description:
        "راهنمایی کامل برای ثبت اختراعات، حمایت از مالکیت فکری و کمک به تجاری سازی ایده های نوآورانه در بازار",
      image: import.meta.env.BASE_URL + "assets/images/service-img/service-7.png",
    },
  ];
  return (
    <>
      <section className="mt-10 space-y-10">
        {services.map((service, index) => (
          <div key={index} className="flex gap-7">
            <div className="w-60 h-60 bg-linear-to-t from-[#6147A8]/40 from-40% to-[#6147A8]/70 rounded-md p-3">
              <img
                src={service.image}
                alt={`تصویر ${service.title}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-7">
              <h1 className="text-3xl">{service.title}</h1>
              <p className="text-lg leading-loose text-black/85 max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}