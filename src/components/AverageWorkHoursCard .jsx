import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


ChartJS.register(ArcElement, Tooltip, Legend);

const AverageWorkHoursCard = ({ averageWorkHours, employeeNames }) => {
  const {t} = useTranslation();
  // Data for the pie chart
  const data = {
    labels: employeeNames,
    datasets: [
      {
        label: "Average Work Hours",
        data: averageWorkHours,
        backgroundColor: [
          "#FF6F61", "#6B8E23", "#6A5ACD", "#FFD700", "#32CD32", "#F08080", "#ADD8E6", "#FF8C00", 
"#FF1493", "#D2691E", "#20B2AA", "#FF6347", "#98FB98", "#87CEEB", "#DB7093", "#D2B48C", 
"#3CB371", "#F4A300", "#9370DB", "#3B9B9B"

        ],
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} hours`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h3 className="text-xl font-bold mb-4">{t("averageHours")}</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

AverageWorkHoursCard.propTypes = {
  averageWorkHours: PropTypes.arrayOf(PropTypes.number).isRequired,
  employeeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AverageWorkHoursCard;
