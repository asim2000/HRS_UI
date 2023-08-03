import axios from "axios"

export default class ServiceService {
    url = 'http://localhost:8585/service'
    headers = {
        'Content-Type': 'application/json'
      }
    getServices(){
        return axios.get(this.url)
    }
    add(data) {
        return axios.post(this.url,JSON.stringify(data),{headers:this.headers})
    }
    
}