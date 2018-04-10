import * as actionTypes from "./itemTypes.js";
import { getItemsService } from "../../service/getItemsService";

export function getItems() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ITEMS_GET_START
        });
        getItemsService().then((resp) => {
            dispatch({
                data: resp.data.list,
                type: actionTypes.ITEMS_GET_SUCCESS
            });
        });
    };
}

export function addItem() {
    return (dispatch) => {
        const action = {
            type: actionTypes.ITEMS_ADD
        };
        setTimeout(() => dispatch(action), 200);
    };
}
export function deleteItem(item) {
    const action = {
        type: actionTypes.ITEMS_DELETE,
        item
    };
    return action;
}
export function deleteAll() {
    const action = {
        type: actionTypes.ITEMS_DELETEALL
    };
    return action;
}