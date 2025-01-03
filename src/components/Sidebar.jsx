import { Link } from "react-router-dom";
import styles from "../assets/styles/Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className="">Menu</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="">Dashboard</Link>
        </li>
        <li className="mb-4">
        <Link
          to="/employees"
          className={` ${location.pathname === "/" ? "active" : ""}`}
        >
          All Employees
        </Link>        
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
