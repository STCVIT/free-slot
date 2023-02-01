import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default axios.create({
  //baseURL: "http://localhost:4000",
  baseURL: "https://free-slot-backend-production.up.railway.app/",
  headers: {
    Authorization: user && `Bearer ${user.token}`
  }
});
