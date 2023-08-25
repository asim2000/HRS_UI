import * as actionTypes from './actionTypes'

export const setLoggedInUser = user => {
    return {
        type:actionTypes.SET_LOGGED_IN_USER,
        payload:user
    }
}