import { useParams } from "react-router-dom"; 
import { employees } from "../data/dummyData"; 
import styles from "../assets/styles/EmployeeDetails.module.css";

const EmployeeDetails = () => {
  const { id } = useParams();

  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="">
      <h1>{employee.name} Task List</h1>
      <table className={styles.tabel}>
        <thead>
          <tr>
            <th className="">Task Name</th>
            <th className="">Task Priority</th>
            <th className="">Task Status</th>
          </tr>
        </thead>
        <tbody>
          {employee.tasks.map((task) => (
            <tr key={`${employee.id}-${task.id}`}>
              <td>{task.name}</td>
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
