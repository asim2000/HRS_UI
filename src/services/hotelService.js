import axios from "axios"
import { makeRequest } from "../api/utils"

export default class HotelService {
    
    create(formData){
        return axios.post('http://localhost:8585/hotel',formData)
    }
    getHomeHotels(data){
        return makeRequest('post','/hotel/home',data)
    }
    getHotelDetails(id){
        return makeRequest('get',`/hotel/${id}/details`)
    }
    getByEmployeeId(id){
        return makeRequest('get',`/hotel/employee/${id}`)
    }
    checkIfExistsRoom(hotelId){
        return makeRequest('get',`/hotel/${hotelId}/ExistsRoom`)
    }
}