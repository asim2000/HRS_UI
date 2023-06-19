import * as actionTypes from './actionTypes'

export const increaseAdultCount = ()=> {
    return {
        type:actionTypes.INCREASE_ADULT_COUNT,
        payload:1
    }
}
export const decreaseAdultCount = ()=> {
    return {
        type:actionTypes.DECREASE_ADULT_COUNT,
        payload:1
    }
}