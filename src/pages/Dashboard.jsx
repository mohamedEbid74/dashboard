import { employees } from "../data/dummyData";
import TaskList from "../components/TaskList";
import EmployeeChart from "../components/EmployeeChart";
import Statistics from "../components/Statistics";
import styles from "../assets/styles/Dashboard.module.css";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    
    <div className={styles.container}>
      <h1>{t("dashboard")}</h1>
      <Statistics />
      <EmployeeChart employees={employees} />
      <TaskList employees={employees} />
    </div>
  );
};

export default Dashboard;
