// eslint-disable-next-line no-unused-vars
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    // return <Navigate to="/" />
    console.log("There's no user");
  }
  console.log(user);
  return children;
};
export default ProtectedRoute;
