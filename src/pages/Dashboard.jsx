import { employees } from "../data/dummyData";
import TaskList from "../components/TaskList";
import EmployeeChart from "../components/EmployeeChart";
import Statistics from "../components/Statistics";
import styles from "../assets/styles/Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Employee Dashboard</h1>
      <Statistics />
      <EmployeeChart employees={employees} />
      <TaskList employees={employees} />
    </div>
  );
};

export default Dashboard;
