/* app/reducers/items.js */
import * as actionTypes from "./itemTypes.js";
import itemsState from "./itemsState";
import { List } from "immutable";

export default function items(state = itemsState, action) {
    let items = state.getIn(["response"]);
    let newItems;
    switch (action.type) {
    case actionTypes.ITEMS_GET_START:
        return state.setIn(["fetchStatus"], "loading")
            .setIn(["errorMsg"], "");
    case actionTypes.ITEMS_GET_SUCCESS:
        return state.setIn(["fetchStatus"], "success")
            .setIn(["response"], List(action.data));
    case actionTypes.ITEMS_GET_ERROR:
        return state.setIn(["fetchStatus"], "error")
            .setIn(["errorMsg"], action.data);
    case actionTypes.ITEMS_ADD:
        newItems = items.push(items.size !== 0 ? items.get(-1) + 1 : 1);
        return state.setIn(["response"], newItems);
    case actionTypes.ITEMS_DELETE:
        newItems = items.delete(items.indexOf(action.item));
        return state.setIn(["response"], newItems);
    case actionTypes.ITEMS_DELETEALL:
        newItems = items.clear();
        return state.setIn(["response"], newItems);
    default:
        return state;
    }
}