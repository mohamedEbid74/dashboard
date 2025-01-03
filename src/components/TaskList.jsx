import PropTypes from "prop-types";
import styles from "../assets/styles/TaskList.module.css";

const TaskList = ({ employees }) => {

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return `${styles.green}`; // Green background for complete
      case 'In Progress':
        return `${styles.blue}`; // Blue background for in-progress
      case 'Delayed':
        return `${styles.orange}`; 
        case 'Pending':
          return `${styles.yellow}`; // Orange background for delayed
      default:
        return '';
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Current Tasks</h2>
      <table className={styles.tabel}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) =>
            emp.tasks.map((task) => (
              <tr key={`${emp.id}-${task.id}`}>
                <td>{`${emp.id}-${task.id}`}</td>
                <td>{emp.name}</td>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td className={`${getStatusClass(task.status)}`}>
                  {task.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

TaskList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default TaskList;
