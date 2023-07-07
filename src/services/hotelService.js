import axios from "axios"

export default class HotelService {
    headers = {
        'Content-Type': 'application/json'
      }
    create(hotel){
        const url = 'http://localhost:8585/hotel'
        return axios.post(url,JSON.stringify(hotel),{headers:this.headers})
    }
}