import { makeRequest } from "../api/utils"

export default class BookingService {
    
    getAllBookingsByPersonId(id){
        return makeRequest('get','/booking/person/'+id)
    }
    getAllBookingsByHotelId(id){
        return makeRequest('get','/booking/hotel/'+id)
    }
}