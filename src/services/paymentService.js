import axios from "axios"

export default class PaymentService {
    headers = {
        'Content-Type': 'application/json'
      }
    url = 'http://localhost:8585/payment'
    create(data){
        return axios.post(this.url+'/create',JSON.stringify(data),{headers:this.headers})
    }
}