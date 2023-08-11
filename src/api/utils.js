import alertify from "alertifyjs"
import axios from "axios"

const instance = axios.create({
    baseURL:'http://localhost:8585',
    timeout:5000,
    headers:{'Content-Type': 'application/json'}
})

export const makeRequest = (type,path,body) => {
    return instance[type](path,JSON.stringify(body))
    
}

instance.interceptors.response.use(response=>{
    if(response.data.code === 200){
        return response.data
    }else{
        alertify.error(response.data.message)
    }
})