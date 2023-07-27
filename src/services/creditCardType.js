import axios from "axios"

export default class CreditCardTypeService {
    url = 'http://localhost:8585/creditcardtype'
    getAll(){
        return axios.get(this.url+'/getall')
    }
}