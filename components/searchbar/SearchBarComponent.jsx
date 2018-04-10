import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import Input from "antd/lib/input";
import "antd/lib/input/style";
import "./searchbar-component.less";

class SearchBar extends React.Component {
    render() {
        // let items = this.context.store.getState().items.toArray();
        // console.log(this.state);
        return (
            <div className="pure-form">
                <Input
                    type="text"
                    onKeyUp={this.keyUpHandler.bind(this)}
                    onClick={this.clickHandler.bind(this)}
                    placeholder="请输入查找的item" />
            </div>
        );
    }
    keyUpHandler = (e) => {
        this.props.filterItem(parseInt(e.target.value, 10));
    }
    clickHandler = (e) => {
        console.log(module.hot);
        console.log(e.target);
    }
}

export default immutableRenderDecorator(SearchBar);
