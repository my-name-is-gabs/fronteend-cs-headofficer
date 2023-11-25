import HeadDoughnutChart from "../Charts/HeadDoughnutChart";
import HeadHorizontalBarChart from "../Charts/HeadHorizontalBarChart";
import HeadLineChart from "../Charts/HeadLineChart";
import HeadPieChart from "../Charts/HeadPieChart";
import axios from '../../api/api_connection'
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({})
  const [labels, setLabels] = useState([])
  const [dataDash, setDatatDash] = useState([])

  useEffect(() => {
    const testingDataFetch = async () => {
      try {
        const res = await axios.get('/head/dashboard/')
        setDashboardData(res.data);
        setLabels(() => res.data.scholarship_type_count.map(value => value.scholarship_type))
        setDatatDash(() => res.data.scholarship_type_count.map(value => value.count))
      } catch (error) {
        alert(`Something went wrong: ${error.message}`)
        console.error(error)
        if(error.response.status === 401) {
          alert("Access token expired. Refresh the page")
        }
      }
    }
    testingDataFetch()
  }, [])

  const generateReport = async () => {
      try {
        const res = await axios.get('/head/dashboard/download-csv/')
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        const fileName = `Dashboard Report ${new Date().getFullYear()}.csv`;
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          link.remove()
      } catch (error) {
        alert(`Something went wrong: ${error.message}`)
        console.error(error)
        if(error.response.status === 401) {
          alert("Access token expired. Refresh the page")
        }
      }
    }

  return (
    <>
      <div className="row">
        <div className="col-md-6 d-block">
          <h1 className="fw-bold">Dashboard</h1>
          <h5 className="text-secondary">Welcome back, {"[Admin name]"}</h5>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button type="button" className="btn btn-primary" onClick={() => generateReport()}>
            Generate Report <i className="ms-2 fa-solid fa-file-pdf"></i>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card--holder-1 p-4">
            <div className="d-block">
              <h6>TOTAL GRADUATING SCHOLAR</h6>
              <h1 className="fw-bold">{dashboardData.graduating_scholars_count}</h1>
            </div>
            <img src="/assets/icons/card_1_icon.png" alt="icon 1" />
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card--holder-2 p-4">
            <div className="d-block">
              <h6>ACCEPTED</h6>
              <h1 className="fw-bold">{dashboardData.total_applicants_count}</h1>
            </div>
            <img src="/assets/icons/card_2_icon.png" alt="icon 2" />
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card--holder-3 p-4">
            <div className="d-block">
              <h6>PENDING APPLICANTS</h6>
              <h1 className="fw-bold">{dashboardData.total_pending_applications_count}</h1>
            </div>
            <img src="/assets/icons/card_3_icon.png" alt="icon 3" />
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-5">
        <h3 className="fw-bold fs-3">Scholar Trend</h3>
        <HeadLineChart />
      </div>

      {/* Doughnut & Pie Chart */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="fw-bold fs-3">Gender</h3>
          <HeadDoughnutChart dashboardData={dashboardData} />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold fs-3">Applicant Status</h3>
          <HeadPieChart dashboardData={dashboardData} />
        </div>
      </div>

      {/* Horizontal Bar chart */}
      <div className="row my-5">
        <HeadHorizontalBarChart labels={labels} dataDash={dataDash} />
      </div>
    </>
  );
};

export default Dashboard;
