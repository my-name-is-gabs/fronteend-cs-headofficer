import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const PrivateRoutingHead = () => {
  const { adminUser } = useContext(AuthContext);

  if (adminUser?.role === "HEAD" && adminUser?.isActive) {
    return <Outlet />;
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.setItem("invalidAccess", "Invalid access, unauthorized user!");
    return <Navigate to="/" />;
  }
};

export default PrivateRoutingHead;
