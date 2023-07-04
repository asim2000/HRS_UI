import { combineReducers } from "redux";
import visibilityReducer from './visibilityReducer'
import adultReducer from './adultReducer'
import childreenReducer from './childreenReducer'
import roomReducer from './roomReducer'
import customerTypeReducer from './customerTypeReducer'

const rootReducer = combineReducers({
    visibilityReducer,
    adultReducer,
    childreenReducer,
    roomReducer,
    customerTypeReducer
})

export default rootReducer;