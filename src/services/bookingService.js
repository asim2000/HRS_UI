import axios from "axios"

export default class BookingService {
    url = 'http://localhost:8585/booking'
    headers = {
        'Content-Type': 'application/json'
      }
    getAllByPersonId(id){
        return axios.get(this.url+'/getallbypersonid/'+id)
    }
    getAllByHotelId(id){
        return axios.get(this.url+'/getallbyhotelid/'+id)
    }
}