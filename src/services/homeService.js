import axios from "axios"

export default class{
    url = 'http://localhost:8585/home'

    getHomeHotels(){
        return axios.get(this.url+'/index')
    }
}