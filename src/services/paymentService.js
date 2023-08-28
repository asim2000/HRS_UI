import { makeRequest } from "../api/utils"

export default class PaymentService {

    createPaymentForCustomer(body){
        return makeRequest('post','/payment/CreateForCustomer',body)
    }
    createPaymentForHotel(body){
        return makeRequest('post','/payment/CreateForHotel',body)
    }
    createPaymentForBroker(body){
        return makeRequest('post','/payment/CreateForBroker',body)
    }
}