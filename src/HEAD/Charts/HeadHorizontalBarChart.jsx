import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Scholarship Type",
    },
  },
};


// eslint-disable-next-line react/prop-types
const HeadHorizontalBarChart = ({labels, dataDash}) => {

const data = {
  labels,
  datasets: [
    {
      label: "Total Count",
      data: [...dataDash],
      borderColor: "rgb(20, 92, 144)",
      backgroundColor: "rgba(20, 92, 144, 1)",
    },
  ],
};
  return <Bar options={options} data={data} />;
};


export default HeadHorizontalBarChart;
