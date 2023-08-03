import axios from "axios"

export default class ItemService {
    url = 'http://localhost:8585/item'
    headers = {
        'Content-Type': 'application/json'
      }

    getAll() {
        return axios.get(this.url)
    }
    add(data) {
        return axios.post(this.url,JSON.stringify(data),{headers:this.headers})
    }
}