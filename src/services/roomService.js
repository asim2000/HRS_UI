import axios from "axios"
import { makeRequest } from "../api/utils"

export default class RoomService {
    
    getAllByHotelId(id) {
        return makeRequest('get',`/room/hotel/${id}`)
    }
    create(values){
        return makeRequest('post','/room',values)
    }
    getRandomRoom(data){
        return makeRequest('post','/room/GetRandomRoom',data)
    }
    getById(id){
        return makeRequest('get',`/room/${id}`)
    }
    getByIdForPayment(id){
        return makeRequest('get',`/room/${id}/ForPayment`)
    }
}