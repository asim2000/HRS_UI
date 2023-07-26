import axios from "axios"

export default class RoomService {
    url = 'http://localhost:8585/room'
    headers = {
        'Content-Type': 'application/json'
      }
    getAllByHotelId(id) {
        return axios.get(this.url+'/getall/'+id)
    }
    create(values){
        return axios.post(this.url+"/create",values)
    }
    getRandomRoom(data){
        return axios.post(this.url+'/getRandomRoom',JSON.stringify(data),{headers:this.headers})
    }
    getById(id){
        return axios.get(this.url+'/getbyid/'+id)
    }
    getByIdForPayment(id){
        return axios.get(this.url+'/getbyidforpayment/'+id)
    }
}