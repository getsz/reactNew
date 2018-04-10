import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import Button from "antd/lib/button";
import "antd/lib/button/style";
import "./footer-component.less";

const Footer = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Button
                style={{ marginRight: "10px" }}
                className="pure-button button-secondary button-small"
                onClick={props.addItem}>add</Button>
            <Button
                className="pure-button button-error button-small"
                onClick={props.deleteAll}>deleteAll</Button>
        </div>
    );
};

export default immutableRenderDecorator(Footer);
