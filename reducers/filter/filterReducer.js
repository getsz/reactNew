import * as actionTypes from "./filterTypes.js";
import filterState from "./filterState";

export default function filter(state = filterState, action) {
    switch (action.type) {
        case actionTypes.FILTER_ITEM:
            return action.data;
        default:
            return state;
    }
}