import { combineReducers } from "redux";
import visibilityReducer from './visibilityReducer'
import adultReducer from './adultReducer'
import childreenReducer from './childreenReducer'
import roomReducer from './roomReducer'
import customerTypeReducer from './customerTypeReducer'
import checkInReducer from './checkInReducer'
import checkOutReducer from './checkOutReducer'
import loggedInUserReducer from './loggedInUserReducer'
const rootReducer = combineReducers({
    visibilityReducer,
    adultReducer,
    childreenReducer,
    roomReducer,
    customerTypeReducer,
    checkInReducer,
    checkOutReducer,
    loggedInUserReducer
})

export default rootReducer;