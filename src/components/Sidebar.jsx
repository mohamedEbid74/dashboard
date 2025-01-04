import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../assets/styles/Sidebar.module.css";
import LanguageToggle from "./LanguageToggle ";


const Sidebar = () => {

const {t} = useTranslation();
  return (
    <div className={styles.sidebar}>
      <h2 className="">{t("menu")}</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="">{t("dashboard")}</Link>
        </li>
        <li className="mb-4">
        <Link
          to="/employees"
          className={` ${location.pathname === "/" ? "active" : ""}`}
        >
          {t("employees")}
        </Link>        
        </li>
    <li>
       <LanguageToggle />
    </li>
      </ul>
    </div>
  );
};

export default Sidebar;
