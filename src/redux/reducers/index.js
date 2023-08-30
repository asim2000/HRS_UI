import { combineReducers } from "redux";
import visibilityReducer from './visibilityReducer'
import adultReducer from './adultReducer'
import childreenReducer from './childreenReducer'
import roomReducer from './roomReducer'
import customerTypeReducer from './customerTypeReducer'
import checkInReducer from './checkInReducer'
import checkOutReducer from './checkOutReducer'
import loggedInUserReducer from './loggedInUserReducer'
import userRolesReducer from './userRolesReducer'
import reportCheckInReducer from './reportCheckInReducer'
import reportCheckOutReducer from './reportCheckOutReducer'

const rootReducer = combineReducers({
    visibilityReducer,
    adultReducer,
    childreenReducer,
    roomReducer,
    customerTypeReducer,
    checkInReducer,
    checkOutReducer,
    loggedInUserReducer,
    userRolesReducer,
    reportCheckInReducer,
    reportCheckOutReducer
})

export default rootReducer;