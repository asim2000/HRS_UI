import axios from "axios"

export default class HotelService {
    create(formData){
        const url = 'http://localhost:8585/hotel'
        return axios.post(url,formData)
    }
}