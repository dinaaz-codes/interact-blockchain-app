import { Route, Routes } from "react-router-dom";
import { withAuthentication } from "./withAuthentication";
import Home from "../pages";
import ViewAllowance from "../pages/ViewAllowance";
import ViewTokenDetails from "../pages/ViewTokenDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/token-detail"
        element={withAuthentication(<ViewTokenDetails />)}
      ></Route>
      <Route
        path="/allowance"
        element={withAuthentication(<ViewAllowance />)}
      ></Route>
    </Routes>
  );
};
