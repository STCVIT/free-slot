import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
//const token = user.accessToken || "hi"
export default axios.create({
    //baseURL: "http://localhost:4000",
  baseURL: "https://free-slot-backend-production.up.railway.app/",
});
