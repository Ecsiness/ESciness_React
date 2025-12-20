import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 h-screen w-screen ">
      <div className="flex items-center justify-center gap-5 text-3xl text-perpule">
        <h1>404</h1>
        <p>صفحه مورد نظر شما یافت نشد!</p>
      </div>
      <Link to="/" className="mt-5 text-light-perpule">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
