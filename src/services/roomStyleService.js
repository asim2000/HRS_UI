import { makeRequest } from "../api/utils"

export default class RoomStyleService {
    getAll(){
        return makeRequest('get','/RoomStyle')
    }
}