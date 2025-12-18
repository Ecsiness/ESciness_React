import CommentCard from "./CommentCard";
const Comments = () => {
  return (
    <div className="bg-stone-200 rounded-4xl my-40 md:p-10 max-sm:p-5 ">
      <div className="bg-perpule lg:h-80 lg:p-10 rounded-4xl flex items-center justify-center max-sm:h-40 ">
        <h2 className="text-white lg:text-4xl lg:-mt-10 max-sm:text-xl md:my-32">
          نظرات کاربران <span className="text-[#D4C2EF]">اکسینس</span>
        </h2>
      </div>
      <div className="flex max-sm:flex-col items-center lg:-mt-20 md:-mt-10 max-sm:-mt-5">
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default Comments;
