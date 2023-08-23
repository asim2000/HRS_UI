import { makeRequest } from "../api/utils"

export default class ServiceService {

    getServices() {
        return makeRequest('get', '/service')
    }
    add(data) {
        return makeRequest('post', '/service', data)
    }

}