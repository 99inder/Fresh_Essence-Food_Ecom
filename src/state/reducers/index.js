import {combineReducers} from "redux";
import getFoodItemsReducer from "./getFoodItemsReducer";
import setUserReducer from "./userReducer";

const rootReducer= combineReducers({
    setUserReducer,
    getFoodItemsReducer
})

export default rootReducer;