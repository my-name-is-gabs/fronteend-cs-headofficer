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
      text: "Top universities with most applicant",
    },
  },
};

const labels = [
  "POLYTECHNIC UNIVERSITY OF THE PHILIPPINES",
  "SAPPHIRE INTERNATIONAL AVIATION ACADEMY",
  "NATIONAL UNIVERSITY",
  "ICCT COLLEGES",
  "CITY UNIVERSITY OF PASAY (PAMANTASAN NG LUNGSOD NG PASAY)",
];

const data = {
  labels,
  datasets: [
    {
      label: "Total Count",
      data: [831, 543, 665, 231, 589],
      borderColor: "rgb(20, 92, 144)",
      backgroundColor: "rgba(20, 92, 144, 0.7)",
    },
  ],
};

const HeadHorizontalBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default HeadHorizontalBarChart;
