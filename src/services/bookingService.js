import { makeRequest } from "../api/utils"

export default class BookingService {
    
    getAllBookingsByOrdererId(id){
        return makeRequest('get','/booking/orderer/'+id)
    }
    getAllBookingsByOrderedId(id){
        return makeRequest('get','/booking/ordered/'+id)
    }
    getAllBookingsByHotelId(id){
        return makeRequest('get','/booking/hotel/'+id)
    }
}