import * as React from "react";
import Page from "../../ui/page/UIPage";
import SearchBarComponent from "../../components/searchbar/SearchBarComponent";
import ContentComponent from "../../components/content/ContentComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import { connect } from "react-redux";
import * as itemsActions from "../../reducers/items/itemsAction";
import * as filterAction from "../../reducers/filter/filterAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

//import lkLog from "lk-log";
//const logger = lkLog.getLogger("MainContainer");

//import httpRequest from "lk-http-request";

import "./main-container.less";

class Main extends React.Component {
    static defaultProps = {
        items: [],
        filter: "",
        actions: {}
    }
    componentDidMount() {
        //logger.primary("mounted");
        console.log("app page didmount");
        this.props.actions.getItems();
        //httpRequest("./lib/manifest-lib.json");
    }
    componentWillUnmount() {
        console.log("app page willunmount");
    }
    render() {
        // console.log("context:", this.context);
        const actions = this.props.actions;
        return (
            <Page>
                <h2>Manage Items</h2>
                <SearchBarComponent filterItem={actions.filterItem} />
                <ContentComponent items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem} />
                <FooterComponent addItem={actions.addItem} deleteAll={actions.deleteAll} />
                <Link to="/second">下一页</Link>
            </Page>
        );
    }
}

export default connect((state) => ({
    items: state.items,
    filter: state.filter
}), (dispatch) => ({
    actions: bindActionCreators({ ...itemsActions, ...filterAction }, dispatch)
}))(Main);
