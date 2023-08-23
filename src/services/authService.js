import { makeRequest } from "../api/utils";

export const register = registerModel => {
    return makeRequest('post','/account/register', registerModel)

}

export const login = loginModel => {
    return makeRequest('post', '/account/login', loginModel)
}