import * as actionTypes from './actionTypes'

export const setUserRoles = roles => {
    return {
        type:actionTypes.SET_USER_ROLES,
        payload:roles
    }
}