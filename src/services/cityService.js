import { makeRequest } from "../api/utils";

export default class CityService {
    getCities() {
        return makeRequest('get',"/city")
    }
}