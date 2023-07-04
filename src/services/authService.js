import axios from "axios";
export default class AuthService {
     headers = {
        'Content-Type': 'application/json'
      }
    register(registerModel){
        return axios.post('http://localhost:8585/account/register',JSON.stringify(registerModel),{headers:this.headers})
        
    }
    login(loginModel){
        return axios.post('http://localhost:8585/account/login',JSON.stringify(loginModel),{headers:this.headers})
    }
}