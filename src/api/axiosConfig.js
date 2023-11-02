import axios from "axios";

export default axios.create({
//   baseURL: "http://localhost:8000/publisher",
  baseURL: "http://localhost:8080/TLSAuthent/services/userservice/users",
  
});