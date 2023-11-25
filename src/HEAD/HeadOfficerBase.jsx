import Dashboard from "./Start/Dashboard";
import Sidebar from "./Components/Sidebar";
import InitiateScholarship from "./Pages/InitiateScholarship";
import "./headOfficer.css";
import { useState } from "react";
import Info from "./Pages/Info";
import Profile from "./Pages/Profile";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
// import axios from '../api/api_connection'

// window.addEventListener('load', async () => {
//   const refresh_token = JSON.parse(localStorage.getItem('refresh_token'))
//   try {
//     const res = await axios.post('/api/token/refresh/', JSON.parse(refresh_token))
//     console.log('refresh ba');
//     console.log(res);
//   } catch (error) {
//     console.error(error)
//   }
// })


const HeadOfficerBase = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const { logoutAdmin } = useContext(AuthContext);
  

  const PageNavigator = (page) => {
    switch (page) {
      case 1:
        return <Dashboard />;

      case 2:
        return <InitiateScholarship />;

      case 3:
        return <Profile />;

      case 4:
        return <Info />;

      default:
        return;
    }
  };

  return (
    <>
      <header className="cs--header shadow-sm">
        <div className="cs--header-container">
          <button
            className="btn fs-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#headOfficerOffCanvas"
            aria-controls="headOfficerOffCanvas"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="d-inline-flex align-items-center gap-4">
            <img
              src="/assets/icons/profile.png"
              width={32}
              height={32}
              alt="profile"
            />
            <a href="#" className="text-decoration-none text-dark" onClick={logoutAdmin}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </a>
          </div>
        </div>
      </header>

      <Sidebar pageCounter={pageCounter} setPageCounter={setPageCounter} />

      <main className="container mt-5">{PageNavigator(pageCounter)}</main>
    </>
  );
};

export default HeadOfficerBase;
