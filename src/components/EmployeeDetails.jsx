import { useParams } from "react-router-dom"; 
import { employees } from "../data/dummyData"; 
import styles from "../assets/styles/EmployeeDetails.module.css";
import { useTranslation } from "react-i18next";


const EmployeeDetails = () => {
  const {t} = useTranslation();
  const { id } = useParams();

  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="">
      <h1>{employee.name} {t("Task_List")}</h1>
      <table className={styles.tabel}>
        <thead>
          <tr>
          <th>{t("Task")}</th>
            <th>{t("start")}</th>
            <th>{t("end")}</th>
            <th>{t("Priority")}</th>
            <th>{t("Status")}</th>
          </tr>
        </thead>
        <tbody>
          {employee.tasks.map((task) => (
            <tr key={`${employee.id}-${task.id}`}>
               <td>{task.name}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
