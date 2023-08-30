import axios from "axios"
import { makeRequest, makeRequestForFormData } from "../api/utils"

export default class HotelService {
    
    create(body){
        return makeRequestForFormData('post','/hotel',body)
    }
    getHomeHotels(body){
        return makeRequest('post','/hotel/home',body)
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
    getReportOfHotel(hotelId) {
        return makeRequest('get',`/hotel/${hotelId}/report`)
    }
}