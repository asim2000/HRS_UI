import axios from "axios"

export default class HotelService {
    url = 'http://localhost:8585/hotel'
    create(formData){
        return axios.post(this.url,formData)
    }
}