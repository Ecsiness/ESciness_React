import { Button } from "../ui/button";

const CommentCard = () => {
  return (
    <div className="border border-[#AC9FF0] rounded-2xl lg:w-[500px] lg:h-[300px] p-10 ">
      <div className="grid grid-cols-3 max-sm:grid gap-5">
        <img
          src="/assets/images/avatar.svg"
          width={150}
          height={50}
          alt="avatar"
          className="col-span-1"
        />
        <p className="md:text-lg max-sm:text-sm max-md:col-span-2 md:col-span-2 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
        <div className="col-span-1 flex flex-col items-center space-y-2.5 max-sm:m-5">
          <h3 className="text-perpule md:-mt-10 text-2xl max-sm:text-lg ">
            user name{" "}
          </h3>
          <p className="text-light-perpule">date</p>
        </div>
        <div className="flex items-center justify-end col-span-2 gap-5 max-sm:m-5 max-sm:flex-col-reverse">
          <p className="text-light-perpule">3 پاسخ</p>
          <Button className="bg-perpule px-4 rounded ">پاسخ به این نظر</Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
