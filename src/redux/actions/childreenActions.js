import * as actionTypes from './actionTypes'

export const increaseChildreenCount = ()=> {
    return {
        type:actionTypes.INCREASE_CHILDREEN_COUNT,
        payload:1
    }
}
export const decreaseChildreenCount = ()=> {
    return {
        type:actionTypes.DECREASE_CHILDREEN_COUNT,
        payload:1
    }
}