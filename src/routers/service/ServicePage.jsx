import BlogActivity from "../../components/service/BlogActivity";
import OurService from "../../components/service/OurService";
import BlogBanner from "./../../components/service/BlogBanner";
import BlogService from "./../../components/service/BlogService";

export default function ServicePage() {
  return (
    <>
      <BlogBanner />
      <BlogService />
      <OurService />
      <BlogActivity />
    </>
  );
}
