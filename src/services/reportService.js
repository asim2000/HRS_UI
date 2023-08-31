import { makeRequest } from "../api/utils"

export default class ReportService {
    getAmountByRecipient(id,body) {
        return makeRequest('post',`/report/recipient/${id}`,body)
    }
}