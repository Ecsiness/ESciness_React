import BlogPage from "./../../../components/singleBlog/BlogPage";
import SendComment from "./../../../components/singleBlog/SendComment";
import ShowComments from "./../../../components/singleBlog/ShowComments";

export default function SingleBlogPage() {
  return (
    <>
      <BlogPage />
      <ShowComments />
      <SendComment />
    </>
  );
}
