import { makeRequest } from "../api/utils"

export default class RoomService {
    
    getAllByHotelId(id) {
        return makeRequest('get',`/room/hotel/${id}`)
    }
    create(body){
        return makeRequest('post','/room',body)
    }
    getRandomRoom(body){
        return makeRequest('post','/room/GetRandomRoom',body)
    }
    getById(id){
        return makeRequest('get',`/room/${id}`)
    }
    getByIdForPayment(id){
        return makeRequest('get',`/room/${id}/ForPayment`)
    }
}