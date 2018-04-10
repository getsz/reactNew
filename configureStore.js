import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/indexReducer";

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept("./reducers/indexReducer", () => {
    //         const nextRootReducer = require("./reducers/indexReducer").default;
    //         console.log(nextRootReducer);
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }
    return store;
}