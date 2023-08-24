import { makeRequest } from "../api/utils"

export default class ServiceService {

    getServices() {
        return makeRequest('get', '/service')
    }
    add(body) {
        return makeRequest('post', '/service', body)
    }

}