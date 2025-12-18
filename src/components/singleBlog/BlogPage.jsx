import HeroSection from "./HeroSection";
import BlogContent from "./BlogContent";
const BlogPage = () => {
  return (
    <section>
      <HeroSection
        imageSrc={"../../../public/assets/images/single-blog.svg"}
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        readTime="۶ دقیقه"
        date="۲۱ بهمن ۱۴۰۳"
      />
      <BlogContent />
    </section>
  );
};

export default BlogPage;
