import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllEmployees = ({ employees }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">All Employees</h2>
      <ul className="list-disc pl-5">
        {employees.map((employee) => (
          <li key={employee.id} className="mb-2">
            <Link to={`/employee/${employee.id}`} className="text-blue-500 hover:underline">
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

AllEmployees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AllEmployees;
