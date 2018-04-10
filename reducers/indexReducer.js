import { combineReducers } from "redux";
import items from "./items/itemsReducer";
import filter from "./filter/filterReducer";

const rootReducer = combineReducers({
    items,
    filter
});

export default rootReducer;