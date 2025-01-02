import PropTypes from "prop-types";

const TaskList = ({ employees }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Current Tasks</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Employee</th>
            <th className="border border-gray-300 p-2">Task</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) =>
            emp.tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 p-2">{emp.name}</td>
                <td className="border border-gray-300 p-2">{task.name}</td>
                <td className="border border-gray-300 p-2">{task.status}</td>
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
