import axios from "axios"

export default class RoomService {
    url = 'http://localhost:8585/room'
    getAllByHotelId(id) {
        return axios.get(this.url+'/getall/hotel/'+id)
    }
    create(values){
        return axios.post(this.url+"/create",values)
    }
}