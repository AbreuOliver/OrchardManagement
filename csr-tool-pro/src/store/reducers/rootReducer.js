import authReducer from "./authReducer";
import reservationsReducer from "./reservationsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    reservation: reservationsReducer
})

export default rootReducer;