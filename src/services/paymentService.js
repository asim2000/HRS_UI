import axios from "axios"

export default class PaymentService {
    headers = {
        'Content-Type': 'application/json'
      }
    url = 'http://localhost:8585/payment'
    createPaymentForCustomer(data){
        return axios.post(this.url+'/createpaymentforcustomer',JSON.stringify(data),{headers:this.headers})
    }
    createPaymentForHotel(data){
        return axios.post(this.url+'/createpaymentforhotel',JSON.stringify(data),{headers:this.headers})
    }
}