import Home from "./Home/Home";
import "./officer.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Pages/Info";
import SettingsPage from "./Pages/SettingPage";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const OfficerBase = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const { logoutAdmin } = useContext(AuthContext);

  const PageNavigator = (page) => {
    switch (page) {
      case 1:
        return <Home />;

      case 2:
        return <SettingsPage />;

      case 3:
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
            data-bs-target="#officerOffCanvas"
            aria-controls="offcanvasExample"
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
            <a
              href="#"
              className="text-decoration-none text-dark"
              onClick={logoutAdmin}
            >
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

export default OfficerBase;
