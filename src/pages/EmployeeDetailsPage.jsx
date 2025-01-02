import { useParams } from "react-router-dom";
import { employees } from "../data/dummyData";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1 className="text-2xl font-bold">Employee Not Found</h1>
        <p>Please check the URL or return to the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{employee.name} Tasks</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Task Name</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {employee.tasks.map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-300 p-2">{task.name}</td>
              <td className="border border-gray-300 p-2">{task.status}</td>
              <td className="border border-gray-300 p-2">{task.startDate}</td>
              <td className="border border-gray-300 p-2">{task.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetailsPage;
