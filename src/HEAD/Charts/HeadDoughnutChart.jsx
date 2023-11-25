import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import PropTypes from 'prop-types'

ChartJS.register(ArcElement, Tooltip, Legend);



const HeadDoughnutChart = ({dashboardData}) => {
  const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Gender",
      data: [dashboardData.male_applicants_count, dashboardData.female_applicants_count],
      backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};
  return <Doughnut data={data} />;
};

HeadDoughnutChart.propTypes = {
  dashboardData: PropTypes.object
}

export default HeadDoughnutChart;
