import axios from "axios"
import { makeRequest } from "../api/utils"

export default class PaymentService {
    headers = {
        'Content-Type': 'application/json'
      }
    url = 'http://localhost:8585/payment'
    createPaymentForCustomer(data){
        return makeRequest('post','/payment/CreateForCustomer',data)
    }
    createPaymentForHotel(data){
        return makeRequest('post','/payment/CreateForHotel',data)
    }
}