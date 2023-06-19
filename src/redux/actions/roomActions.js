import * as actionTypes from './actionTypes'

export const increaseRoomCount = ()=> {
    return {
        type:actionTypes.INCREASE_ROOM_COUNT,
        payload:1
    }
}
export const decreaseRoomCount = ()=> {
    return {
        type:actionTypes.DECREASE_ROOM_COUNT,
        payload:1
    }
}