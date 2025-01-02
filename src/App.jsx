import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import { employees } from "./data/dummyData";
import AllEmployees from "./components/AllEmployees ";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./assets/styles/App.module.css";
const App = () => {
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
            <Route path="/employee/:id" element={<EmployeeDetailsPage />} />
            <Route path="/employees" element={<AllEmployees employees={employees} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
