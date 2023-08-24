import { makeRequest } from "../api/utils";

export default class PersonService {
    getById(id) {
        return makeRequest('get',`/person/${id}`)
    }
}