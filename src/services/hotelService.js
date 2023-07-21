import axios from "axios"

export default class HotelService {
    url = 'http://localhost:8585/hotel'
    create(formData){
        return axios.post(this.url,formData)
    }
    getHomeHotels(){
        return axios.get(this.url+'/home/all')
    }
    getHotelDetails(id){
        return axios.get(this.url+'/details/'+id)
    }
    getByEmployeeId(id){
        return axios.get(this.url+'/employee/'+id)
    }
}