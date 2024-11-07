import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Loading from "./components/Loading/Loading";
import { useContext, useEffect } from "react";
import { UsersContext } from "./providers/usersProvider";
import { checkSession } from "./reducers/users/users.actions";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const App = () => {
  const {
    state: { loading },
    dispatch,
  } = useContext(UsersContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.location.pathname.includes("/verifyaccount/")) {
      checkSession(dispatch, navigate);
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/verifyaccount/:id/:token" element={<VerifyAccount />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
