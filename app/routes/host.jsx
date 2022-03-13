import { Link, Outlet } from "remix";

const HostNav = () => (
  <ul className="flex flex-wrap justify-center m-4 border-gray-200 dark:border-gray-700">
    <li className="mr-2">
      <Link to="#" aria-current="page">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Overview
        </button>
      </Link>
    </li>
    <li className="mr-2">
      <Link to="#">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Companies
        </button>
      </Link>
    </li>
    <li className="mr-2">
      <Link to="#">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Interviewer
        </button>
      </Link>
    </li>
    <li className="mr-2">
      <Link to="#">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Student
        </button>
      </Link>
    </li>
  </ul>
);

const Host = () => {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
};

export default Host;
