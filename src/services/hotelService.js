import axios from "axios"

export default class HotelService {
    headers = {
        'Content-Type': 'application/json'
      }
    url = 'http://localhost:8585/hotel'
    create(formData){
        return axios.post(this.url,formData)
    }
    getHomeHotels(data){
        return axios.post(this.url+'/home/getall',JSON.stringify(data),{headers:this.headers})
    }
    getHotelDetails(id){
        return axios.get(this.url+'/details/'+id)
    }
    getByEmployeeId(id){
        return axios.get(this.url+'/employee/'+id)
    }
}