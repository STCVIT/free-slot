// eslint-disable-next-line no-unused-vars
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  // const { user } = UserAuth();
  const user = localStorage.getItem("user")
  if (!user) {
    console.log("There's no user");
    return <Navigate to="/login" />
  }
  return children;
};
export default ProtectedRoute;
