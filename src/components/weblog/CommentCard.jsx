const CommentCard = () => {
  return (
    <div className="bg-white rounded-4xl lg:p-8 lg:mx-8 max-sm:p-5 max-sm:mb-2 md:p-6 md:mx-3 ">
      <div className="flex items-center gap-10 pb-5">
        <img
          className="founded-full"
          src={import.meta.env.BASE_URL + "assets/images/avatar.svg"}
          width={25}
          height={25}
          alt="avatar"
        />
        <p>نام کاربری</p>
      </div>
      <p className="max-sm:text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
    </div>
  );
};

export default CommentCard;