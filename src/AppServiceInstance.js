import axios from "axios";

const SPRING_API_URL = "http://localhost:8080/SpringDocker";

const AppServiceInstance = axios.create({
  baseURL: `${SPRING_API_URL}`, // Your backend URL
  timeout: 5000, // Request timeout
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Connection: "keep-alive",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default AppServiceInstance;
