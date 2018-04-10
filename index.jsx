import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Container from "./containers/Container";
import configureStore from "./configureStore";
// import { Router, Route, IndexRoute } from "react-router";
// import { RouteTransition } from 'react-router-transition';
import {
    HashRouter,
    Route
} from "react-router-dom";

//import lkLog from "lk-log";
// lkLog.config({
//     logUrl: "./log",
//     logLevel: 0
// });
 //const logger = lkLog.getLogger("MainContainer");

window.onerror = function (msg, url, l) {
    let errMsg = "";
    errMsg = "There was an error on this page.;";
    errMsg += "Error: " + msg + ";";
    errMsg += "URL: " + url + ";";
    errMsg += "Line: " + l + ";";
  //  logger.primary(errMsg);
};

const store = configureStore();

render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Container} />
        </HashRouter>
    </Provider>, document.getElementById("app")
);