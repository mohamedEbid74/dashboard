import { Link, useLocation } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.css"
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {/* Logo or Home */}
      <div className="text-xl font-bold">
        <Link to="/" className="hover:underline">Home</Link>
      </div>
      
      {/* Navigation Links */}
      <div>
        <Link
          to="/employees"
          className={`px-4 ${location.pathname === "/" ? "underline font-bold" : "hover:underline"}`}
        >
          All Employees
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
