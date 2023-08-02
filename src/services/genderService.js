import axios from "axios";

export default class GenderService {
    getGenders(headers) {
        return axios.get("http://localhost:8585/gender",{headers:headers})
    }
}