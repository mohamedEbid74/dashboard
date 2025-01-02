import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";
import AverageWorkHoursCard from "./AverageWorkHoursCard ";
import styles from "../assets/styles/EmployeeChart.module.css";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeChart = ({ employees }) => {
  // Extract employee names
  const employeeNames = employees.map((emp) => emp.name);

  // Calculate completed tasks count
  const completedTasks = employees.map((emp) =>
    emp.tasks.filter((task) => task.status === "Completed").length
  );

  // Calculate delayed tasks count
  const delayedTasks = employees.map((emp) =>
    emp.tasks.filter((task) => task.status === "Delayed").length
  );

  // Calculate average work hours per employee
  const averageWorkHours = employees.map((emp) => {
    const totalHours = emp.tasks.reduce((acc, task) => {
      const startDate = new Date(task.startDate);
      const endDate = new Date(task.endDate);
      const hoursWorked = (endDate - startDate) / (1000 * 60 * 60); // Calculate difference in hours
      return acc + hoursWorked;
    }, 0);
    return totalHours / emp.tasks.length; // Average work hours per employee
  });

  // Prepare data for the chart
  const data = {
    labels: employeeNames,
    datasets: [
      {
        label: "Completed Tasks",
        data: completedTasks,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Delayed Tasks",
        data: delayedTasks,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.allCharts}>
      <div className={styles.leftSide}>
        <h2 className="text-xl font-bold mb-4">Task Statistics</h2>
        <Bar data={data} options={options} />
      </div>

      <div className={styles.rightSide}>
        <AverageWorkHoursCard averageWorkHours={averageWorkHours} employeeNames={employeeNames} />
      </div>
    </div>
  );
};

// PropTypes validation
EmployeeChart.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default EmployeeChart;
