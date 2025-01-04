import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../assets/styles/Navbar.module.css";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
  };

  return (
    <nav className={styles.nav}>


      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/" className="text-xl font-bold hover:underline">{t("home")}</Link>

        <Link
          to="/employees"
          className={`px-4 ${location.pathname === "/employees" ? "underline font-bold" : "hover:underline"}`}
        >
          {t("employees")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
