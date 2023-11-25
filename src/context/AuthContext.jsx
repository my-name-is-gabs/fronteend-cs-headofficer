import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "../api/api_connection";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(() =>
    localStorage.getItem("access_token")
      ? jwtDecode(localStorage.getItem("access_token"))
      : null
  );

  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validAdmin = localStorage.getItem("invalidAccess")
    ? localStorage.getItem("invalidAccess")
    : "";

  useEffect(() => {
    setTimeout(() => {
      setError("");
      localStorage.removeItem("invalidAccess");
    }, 6000);
  }, [error]);

  useEffect(() => {
    setError(validAdmin);
  }, [validAdmin]);

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        "/api/token/",
        JSON.stringify({
          username: e.target.admin_username.value,
          password: e.target.admin_password.value,
        })
      );

      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      setAdminUser(jwtDecode(res.data.access));
      axios.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");

      setLoading(false);
      return navigate("/head");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response.status === 401) {
        setError("Wrong credentials!");
        e.target.admin_username.value = "";
        e.target.admin_password.value = "";
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  };

  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        adminUser,
        handleAdminLogin,
        logoutAdmin,
        error,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
