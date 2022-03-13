import { Link } from "remix";
import { useIsLoggedIn } from "~/providers/auth";

const Header = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-no-shrink text-black mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">MockIT</span>
        </Link>
      </div>
      {!isLoggedIn && (
        <div className="order-last w-full flex justify-end flex-grow lg:flex lg:items-right lg:w-auto">
          <div className="order-last">
            <Link
              to="/create-account"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
