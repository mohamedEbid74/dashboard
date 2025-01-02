import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        </li>
        <li className="mb-4">
        <Link
          to="/employees"
          className={`px-4 ${location.pathname === "/" ? "underline font-bold" : "hover:underline"}`}
        >
          All Employees
        </Link>        
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
