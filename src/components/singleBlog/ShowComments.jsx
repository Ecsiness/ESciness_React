import { FaComments } from "react-icons/fa";
import CommentCard from "./CommentCard";

const ShowComments = () => {
  return (
    <section className="my-30">
      <div className="text-3xl flex items-center justify-start gap-5 my-5 text-perpule">
        <span>
          <FaComments />
        </span>
        <h2>نظرات شما </h2>
        <p className="text-lg">نظر 5</p>
      </div>
      <div className="grid  place-items-center lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
        <CommentCard />
        <CommentCard />
      </div>
    </section>
  );
};

export default ShowComments;
