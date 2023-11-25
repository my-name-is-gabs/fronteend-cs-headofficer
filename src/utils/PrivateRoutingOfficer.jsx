import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoutingOfficer = () => {
  const { adminUser } = useContext(AuthContext);

  // if (adminUser?.role === "OFFICER" && adminUser?.isActive) {
  //   return <Outlet />;
  // } else {

  //   localStorage.setItem("invalidAccess", "Invalid access, unauthorized user!");
  //   return <Navigate to="/" />;
  // }
  return adminUser.role === "OFFICER" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutingOfficer;
