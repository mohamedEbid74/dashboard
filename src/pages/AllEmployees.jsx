import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../assets/styles/AllEmployees .module.css"
import { useTranslation } from "react-i18next";

const AllEmployees = ({ employees }) => {
  const { t } = useTranslation();

  return (
    <div className="">
      <h2 className="">{t("employees")}</h2>
      <ul className={styles.listDisc}>
        {employees.map((employee) => (
             <Link key={employee.id} to={`/employee/${employee.id}`} className="">
              <li  className="mb-2">
                    <img src="https://i.pravatar.cc/150?img=3" />
                    <Link to={`/employee/${employee.id}`} className="">
                      {employee.name}
                    </Link>
                    <div>
                      <Link to={`/employee/${employee.id}`} className="">
                        <p>{t("View_Tasks")}</p>  
                      </Link>
                      <span>{employee.tasks.length} {t("Taskf")}</span>
                    </div>
              </li>
            </Link>
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
