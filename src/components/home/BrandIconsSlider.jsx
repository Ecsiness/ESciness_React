import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
const BrandIconsSlider = () => {
  const icons = [
    { id: 1, image: import.meta.env.BASE_URL + "assets/images/brands/brand1.svg" },
    { id: 4, image: import.meta.env.BASE_URL + "assets/images/brands/brand4.svg" },
    { id: 5, image: import.meta.env.BASE_URL + "assets/images/brands/brand5.svg" },
    { id: 6, image: import.meta.env.BASE_URL + "assets/images/brands/brand6.svg" },
    { id: 7, image: import.meta.env.BASE_URL + "assets/images/brands/brand7.svg" },
    { id: 8, image: import.meta.env.BASE_URL + "assets/images/brands/brand8.svg" },
    { id: 9, image: import.meta.env.BASE_URL + "assets/images/brands/brand9.svg" },
    { id: 10, image: import.meta.env.BASE_URL + "assets/images/brands/brand10.svg" },
  ];

  return (
    <section className="mt-20">
      <h1 className="text-3xl text-center my-10 max-sm:text-xl ">
        برندهایی که با ما همکاری کرده اند
      </h1>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        className="flex items-center justify-center overflow-hidden"
      >
        {icons.map((icon) => (
          <SwiperSlide key={icon.id} virtualIndex={icon.id}>
            <img
              src={icon.image}
              alt={`Brand ${icon.id}`}
              width={96}
              height={96}
              className="size-24 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mx-auto  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandIconsSlider;