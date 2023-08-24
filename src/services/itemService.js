import axios from "axios"
import { makeRequest } from "../api/utils"

export default class ItemService {

    getAll() {
        return makeRequest('get', '/item')
    }
    add(body) {
        return makeRequest('post', '/item', body)
    }
}