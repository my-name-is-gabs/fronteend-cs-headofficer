import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from 'prop-types'
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const HeadPieChart = ({dashboardData}) => {
  const data = {
  labels: ["New Applicant", "Renewing Applicant"],
  datasets: [
    {
      label: "No. of New & Renewing Applicant",
      data: [dashboardData.new_applicants_count, dashboardData.renewing_applicants_count],
      backgroundColor: ["#bfe8ff", "#0075a4"],
      borderColor: ["#bfe8ff", "#0075a4"],
      borderWidth: 1,
    },
  ],
};

  return <Pie data={data} />;
};

HeadPieChart.propTypes = {
  dashboardData: PropTypes.object,
}

export default HeadPieChart;
