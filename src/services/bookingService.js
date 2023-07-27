import axios from "axios"

export default class BookingService {
    url = 'http://localhost:8585/booking'
    headers = {
        'Content-Type': 'application/json'
      }
    book(values){
        return axios.post(this.url+'/book',JSON.stringify(values),{headers:this.headers})
    }
}