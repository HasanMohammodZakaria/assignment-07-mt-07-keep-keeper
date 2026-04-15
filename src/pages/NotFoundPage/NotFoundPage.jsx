
import { Link } from "react-router";
import { BiError } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <BiError className="text-[80px] sm:text-[100px] md:text-[120px] text-red-500" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">404</h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn bg-[#244D3F] text-white hover:bg-[#1b3a2f] border-none px-6"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
