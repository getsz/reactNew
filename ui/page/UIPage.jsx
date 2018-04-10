
import * as React from "react";
//import { CSSTransitionGroup } from "react-transition-group";
import "./ui-page.less";
//import initReactFastclick from "react-fastclick";
//import lkLog from "lk-log";
//initReactFastclick();

// lkLog.config({
//     host: "http://finance.83.linkage.com:8080/finance1/",
//     logLevel: 1
// });
// const logger = lkLog.getLogger("UIPage");

// pure render function

// or more complex class
export default class Page extends React.Component {
    static defaultProps = {
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        [1, 2, 3].find((item) => item === 1);
        //logger.primary("log test");
    }
    componentDidMount() {
    }

    componentWillReceiveProps(nextProps, nextState) {
    }

    componentWillUnmount() {
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div className={"page-component ui-page " + (this.props.className ? this.props.className : "")}>
                {this.props.children}
            </div >
        );
    }
}