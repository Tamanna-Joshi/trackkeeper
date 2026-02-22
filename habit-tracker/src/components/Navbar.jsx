import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Task Tracker Pro</h1>

      <div className="flex gap-4">
        <Link
          to="/"
          className={`px-4 py-2 rounded ${
            location.pathname === "/" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Daily Tasks
        </Link>
        <Link
          to="/analytics"
          className={`px-4 py-2 rounded ${
            location.pathname === "/analytics"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Analytics
        </Link>
      </div>
    </div>
  );
}