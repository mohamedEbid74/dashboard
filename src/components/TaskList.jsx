import  { useState } from "react";
import PropTypes from "prop-types";
import styles from "../assets/styles/TaskList.module.css";
import { useTranslation } from "react-i18next";

const TaskList = ({ employees }) => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState(() => {
    // Flatten tasks for easier manipulation
    return employees.flatMap((emp) =>
      emp.tasks.map((task) => ({
        ...task,
        employeeName: emp.name,
      }))
    );
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    startDate: "",
    endDate: "",
    priority: "",
    status: "Pending",
    employeeName: "",
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTask({
      name: "",
      startDate: "",
      endDate: "",
      priority: "",
      status: "Pending",
      employeeName: "",
    });
    togglePopup();
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return `${styles.green}`;
      case "In Progress":
        return `${styles.blue}`;
      case "Delayed":
        return `${styles.orange}`;
      case "Pending":
        return `${styles.yellow}`;
      default:
        return "";
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <div className={styles.flex}>
        <h2 className="text-xl font-bold mb-4">{t("currentTasks")}</h2>
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={togglePopup}
        >
          {t("add_task")}
        </button>
      </div>
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <div className={styles.inputs}>

              <input
                type="text"
                name="name"
                placeholder={t("Task Name")}
                value={newTask.name}
                onChange={handleInputChange}
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="date"
                name="startDate"
                placeholder={t("start")}
                value={newTask.startDate}
                onChange={handleInputChange}
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="date"
                name="endDate"
                placeholder={t("end")}
                value={newTask.endDate}
                onChange={handleInputChange}
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                name="priority"
                placeholder={t("Priority")}
                value={newTask.priority}
                onChange={handleInputChange}
                className="mb-2 w-full p-2 border rounded"
              />
              <input
                type="text"
                name="employeeName"
                placeholder={t("Employee")}
                value={newTask.employeeName}
                onChange={handleInputChange}
                className="mb-2 w-full p-2 border rounded"
              />
            </div>
            <div className={styles.btn}>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-green-500 text-white rounded mr-2"
              >
                {t("Add")}
              </button>
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                {t("Cancel")}
              </button>

            </div>
          </div>
        </div>
      )}
      <table className={styles.tabel}>
        <thead>
          <tr>
            <th>{t("ID")}</th>
            <th>{t("Employee")}</th>
            <th>{t("Task")}</th>
            <th>{t("start")}</th>
            <th>{t("end")}</th>
            <th>{t("Priority")}</th>
            <th>{t("Status")}</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={`${task.employeeName}-${index}`}>
              <td>{index + 1}</td>
              <td>{task.employeeName}</td>
              <td>{task.name}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>{task.priority}</td>
              <td className={`${getStatusClass(task.status)}`}>
                {task.status}
              </td>
            </tr>
          ))}
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
