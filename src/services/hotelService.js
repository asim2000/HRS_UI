import axios from "axios"

export default class HotelService {
    create(hotel){
        const formData = new FormData(hotel.images)
        hotel.images = formData
        const url = 'http://localhost:8585/hotel'
        return axios.post(url,hotel)
    }
}