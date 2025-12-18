import ContactForm from "./ContactForm";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import MapSection from "./MapSection";

const ContactUs = () => {
  return (
    <>
      <div className="bg-perpule md:rounded-[50px] md:h-80 max-sm:h-36 my-10 text-white text-4xl flex items-center justify-center lg:px-20 max-sm:rounded-3xl">
        <h2>تماس با ما</h2>
      </div>
      <div className="text-center m-20 ">
        <p>
          تیم اکسینس تمام وقت پاسخگوی سوالات، نظرات و انتقادات شما هستند.شما می
          توانید از طریق فرم زیر درخواست خود را ثبت نمایید تا در اسرع وقت به شما
          پاسخ داده شود.
        </p>
      </div>
      <ContactForm />
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5 my-10 ">
        <Button className="bg-perpule rounded-4xl p-14 w-lg max-md:w-2xs max-sm:p-10 text-2xl flex items-center gap-10">
          <p>infoecsiness@gmail.com</p>
          <FaEnvelope className="size-10" />
        </Button>
        <Button className="bg-perpule rounded-4xl p-14 w-lg max-md:w-2xs max-sm:p-10 text-2xl flex items-center gap-10">
          09365008696
          <FaPhoneAlt className="size-10" />
        </Button>
      </div>
      <MapSection />
    </>
  );
};

export default ContactUs;
