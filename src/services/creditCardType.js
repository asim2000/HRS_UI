import { makeRequest } from "../api/utils"

export default class CreditCardTypeService {
    getAll(){
        return makeRequest('get','/creditcardtype')
    }
}