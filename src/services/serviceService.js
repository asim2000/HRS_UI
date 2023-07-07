import axios from "axios"

export default class ServiceService {
    getServices(){
        const url = 'http://localhost:8585/service'
        return axios.get(url)
    }
}