import { Routes, Route } from "react-router-dom";
import HeadOfficerBase from "./HEAD/HeadOfficerBase";
import Login from "./login/Login";
import PageNotFound from "./PageNotFound";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutingHead from "./utils/PrivateRoutingHead";
import ForgotPassword from "./forgot pass/ForgotPassword";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" index element={<Login />} />
          
          {/* Private Routing for head scholar officer */}
          <Route element={<PrivateRoutingHead />}>
            <Route path="/head" element={<HeadOfficerBase />} />
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
