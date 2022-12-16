import axios from 'axios'
const user = JSON.parse(localStorage.getItem("user"))
//const token = user.accessToken || "hi"
export default axios.create({
    baseURL: 'http://localhost:4000',
    //baseURL: 'https://scheduler-backend.azurewebsites.net/',
    //headers: {'Authorization': `Bearer ${token}`}
})