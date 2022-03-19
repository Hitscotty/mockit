import { Form, Link } from "remix";
import { useOptionalUser } from "~/utils";

const Header = () => {
  const user = useOptionalUser();
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-100 p-6">
      <div className="flex-no-shrink mr-6 flex items-center text-black">
        <Link to="/">
          <img className="h-4 w-auto sm:h-6" src="/wordmark.svg" alt="" />
        </Link>
      </div>
      {!user && (
        <div className="justify-end space-y-4 sm:ml-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
          <Link
            to="/join"
            className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 sm:px-8"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center rounded-md bg-yellow-500 py-2 px-4 font-medium text-white hover:bg-yellow-600  "
          >
            Log In
          </Link>
        </div>
      )}
      {user && (
        <div className="justify-end space-y-4 sm:ml-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Logout
            </button>
          </Form>
        </div>
      )}
    </nav>
  );
};

export default Header;
