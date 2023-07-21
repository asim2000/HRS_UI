import axios from "axios"

export default class RoomStyleService {
    url = 'http://localhost:8585/roomstyle/getall'
    getAll(){
        return axios.get(this.url)
    }
}