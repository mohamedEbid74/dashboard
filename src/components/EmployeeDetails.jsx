import { Link } from "react-router-dom";
import { employees } from "../data/dummyData"; // Assuming you're importing employee data

const EmployeeDetails = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Employee Name</th>
            <th className="border border-gray-300 p-2">Task Count</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.tasks.length}</td>
              <td className="border border-gray-300 p-2">
                <Link to={`/employee/${employee.id}`} className="text-blue-600 hover:underline">
                  View Tasks
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails ;