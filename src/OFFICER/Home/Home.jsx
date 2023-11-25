import { useEffect } from "react";
import Modal from "../Components/Modal";
import axios from "../../api/api_connection";
import { useState } from "react";

const Home = () => {
  const [fetchListData, setListData] = useState([]);
  const [getApplicantId, setApplicantId] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get("/applications/list/");
        setListData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingData();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center">
        {/* <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-end h-100">
            <div className="container input-group">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="search"
                name="search_field"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div> */}
        <div className="col-md-3 me-4">
          <label htmlFor="type" className="form-label">
            Scholar filter
          </label>
          <select name="type" id="type" className="form-select">
            <option selected="selected" defaultValue>
              Choose Scholar Type...
            </option>
            <option value="BASIC PLUS SUC">BASIC PLUS SUC</option>
            <option value="SUC_LCU">SUC/LCU</option>
            <option value="BASIC SCHOLARSHIP">BASIC SCHOLARSHIP</option>
            <option value="HONORS">HONORS</option>
            <option value="PRIORITY">PRIORITY</option>
            <option value="PREMIER">PREMIER</option>
          </select>
        </div>
        <button className="btn btn-primary align-self-end me-2">Filter</button>
        <button className="btn btn-secondary align-self-end">Clear</button>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <div className="container d-flex justify-content-between">
            <div className="d-inline-flex gap-2 align-items-center">
              <img src="/assets/icons/folder.png" alt="folder" />
              <h5 className="fw-bold">Applicant Records</h5>
            </div>
            <div className="d-inline-flex gap-5 justify-content-around align-items-center">
              <h6>
                Remaining: <strong>60</strong>
              </h6>
              <h6>Current Page: 2</h6>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover w-100">
            <thead>
              <th scope="col">Applicant ID</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Applying for Semester</th>
              <th scope="col">Scholarship Type</th>
              <th scope="col">Applicant Status</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </thead>
            <tbody>
              {/* <tr>
                <td>123</td>
                <td>John Doe</td>
                <td>jd@gmail.com</td>
                <td>second</td>
                <td>pending</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#scholarListModal"
                  >
                    View <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr> */}
              {fetchListData.map((list, i) => (
                <tr key={i}>
                  <td>{list.application_reference_id}</td>
                  <td>{list.firstname}</td>
                  <td>{list.email_address}</td>
                  <td>{list.semester}</td>
                  <td>{list.scholarship_type}</td>
                  <td>{list.applicant_status}</td>
                  <td>pending</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        setApplicantId(list.application_reference_id)
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#scholarListModal"
                    >
                      View <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FORM */}
      <Modal applicant_id={getApplicantId} />
    </>
  );
};

export default Home;
