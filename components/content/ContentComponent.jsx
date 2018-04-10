import * as React from "react";
import "./content-component.less";

export default class Content extends React.Component {
    render() {

        return (
            <ul>
                {this.props.items.response.map((v) =>
                    <LiItem
                        filter={parseInt(this.props.filter, 10)}
                        item={v} key={v}
                        deleteItem={this.props.deleteItem}
                    />)}
            </ul>
        );
    }
}

class LiItem extends React.Component {
    render() {
        // let liClass = classNames({ hidden: this.props.filter && this.props.filter != this.props.item});

        const isHidden = this.props.filter && this.props.filter !== this.props.item;

        // console.log('this.props.item:', this.props.item);
        // console.log('this.props.filter:', this.props.filter);
        // console.log('liClass:', liClass);

        return (
            <li style={{ display: isHidden ? "none" : "block" }}>
                <span style={{ marginRight: "4px" }}>{this.props.item}</span>
                <button onClick={this.props.deleteItem.bind(this, this.props.item)}>delete</button>
            </li>
        );
    }
}
