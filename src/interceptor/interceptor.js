import axios from "axios";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate()
const check = () => {
    axios.interceptors.response.use(response => {
        return response;
     }, error => {
       if (error.response.status === 401) {
        navigate("/login")
       }
       return error;
     });
}