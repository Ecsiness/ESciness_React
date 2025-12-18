import { FaClock, FaCalendarAlt } from "react-icons/fa";

const HeroSection = ({ imageSrc, title, subtitle, readTime, date }) => {
  return (
    <section
      className="relative text-white overflow-hidden p-10  "
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* cover for bg-image */}
      <div className="absolute inset-0 backdrop-blur-3xl w-screen" />
      <div className="relative flex max-sm:flex-col items-center px-6 gap-10 ">
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg ">
            <img
              src={imageSrc}
              alt="Hero"
              width={500}
              height={350}
              className="object-cover "
            />
          </div>
        </div>
        <div className="flex gap-6 text-sm max-sm:text-center mt-6">
          <div className=" space-y-6 ">
            <h1 className="text-2xl md:text-4xl max-sm:text-lg ">{title}</h1>
            <p className="text-base md:text-lg text-white/80 max-sm:text-sm ">
              {subtitle}
            </p>
            <div className="flex gap-6 text-sm text-white/60 mt-6 max-sm:text-sm">
              <div className="flex items-center gap-2 max-sm:text-center">
                <FaCalendarAlt className="max-sm:size-3" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="max-sm:size-3" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
