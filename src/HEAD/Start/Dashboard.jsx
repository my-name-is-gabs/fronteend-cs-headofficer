import HeadDoughnutChart from "../Charts/HeadDoughnutChart";
import HeadHorizontalBarChart from "../Charts/HeadHorizontalBarChart";
import HeadLineChart from "../Charts/HeadLineChart";
import HeadPieChart from "../Charts/HeadPieChart";

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 d-block">
          <h1 className="fw-bold">Dashboard</h1>
          <h5 className="text-secondary">Welcome back, {"[Admin name]"}</h5>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button type="button" className="btn btn-primary">
            Generate Report <i className="ms-2 fa-solid fa-file-pdf"></i>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card--holder-1 p-4">
            <div className="d-block">
              <h6>TOTAL APPLICANTS</h6>
              <h1 className="fw-bold">5,562</h1>
            </div>
            <img src="/assets/icons/card_1_icon.png" alt="icon 1" />
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card--holder-2 p-4">
            <div className="d-block">
              <h6>ACCEPTED</h6>
              <h1 className="fw-bold">2,852</h1>
            </div>
            <img src="/assets/icons/card_2_icon.png" alt="icon 2" />
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card--holder-3 p-4">
            <div className="d-block">
              <h6>BUDGET ESTIMATE</h6>
              <h1 className="fw-bold">₱ 120M</h1>
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
          <HeadDoughnutChart />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold fs-3">Status</h3>
          <HeadPieChart />
        </div>
      </div>

      {/* Horizontal Bar chart */}
      <div className="mt-5">
        <HeadHorizontalBarChart />
      </div>
    </>
  );
};

export default Dashboard;
