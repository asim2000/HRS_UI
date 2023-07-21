import axios from "axios"

export default class ItemService {
    url = 'http://localhost:8585/item/getall'

    getAll() {
        return axios.get(this.url)
    }
}