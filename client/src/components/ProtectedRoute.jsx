// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { UserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  // const { user } = UserAuth();
  const [timeTable, setTimeTable] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  // async function getUser() {
  //   const userData = await axios.post(
  //     "user/getUserByEmail",
  //     {
  //       email: user.email,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     }
  //   );
  //   setTimeTable(userData.data.timeTable);
  //   console.log(userData.data.timeTable);
  //   if (!timeTable || timeTable.length === 0) {
  //     return navigate("/timetable");
  //   }
  // }
  // useEffect(() => {
  //   console.log(timeTable);
  //   getUser();
  // }, []);

  if (!user) {
    console.log("There's no user");
    return navigate("/login");
  }

  return children;
};
export default ProtectedRoute;
