import * as actionTypes from './actionTypes'

export const changeCheckIn = (checkIn) => {
    return {
        type:actionTypes.CHANGE_CHECK_IN,
        payload:checkIn
    }
}
export const changeCheckOut = (checkOut) => {
    return {
        type:actionTypes.CHANGE_CHECK_OUT,
        payload:checkOut
    }
}