import * as actionTypes from "./filterTypes";

export function filterItem(value) {
    const action = {
        type: actionTypes.FILTER_ITEM,
        data: value
    };
    return action;
}