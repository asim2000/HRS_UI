import { makeRequest } from "../api/utils";

export default class GenderService {
    getAll() {
        return makeRequest('get',"/gender")
    }
}