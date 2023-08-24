import axios from "axios"
import { makeRequest, makeRequestForFormData } from "../api/utils"

export default class AuthService {

 register = body => {
    return makeRequestForFormData('post','account/register', body)

}

 login = body => {
    return makeRequest('post', '/account/login', JSON.stringify(body))
}
}