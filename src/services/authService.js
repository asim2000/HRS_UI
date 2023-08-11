import axios from "axios";
import { makeRequest } from "../api/utils";
import { setJwt } from "../utilities/jwt/jwt";
import jwtDecode from "jwt-decode";
import alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

const headers = {
    'Content-Type': 'application/json'
}
export const register = registerModel => {
    return axios.post('http://localhost:8585/account/register', JSON.stringify(registerModel), { headers: headers })

}
// login(loginModel){
//     return axios.post('http://localhost:8585/account/login',JSON.stringify(loginModel),{headers:this.headers})
// }
export const login = loginModel => {
    return makeRequest('post', '/account/login', loginModel)
}