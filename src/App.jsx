import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllEmployees from "./pages/AllEmployees";
import { employees } from "./data/dummyData";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./assets/styles/App.module.css";
import EmployeeDetails from "./components/EmployeeDetails";
import  { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  // Change direction based on language
  useEffect(() => {
    const htmlTag = document.documentElement;
    htmlTag.lang = i18n.language; // Set lang attribute
    htmlTag.dir = i18n.language === "ar" ? "rtl" : "ltr"; // Set direction
  }, [i18n.language]);
  
  return (
    <Router>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/employees" element={<AllEmployees employees={employees} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
