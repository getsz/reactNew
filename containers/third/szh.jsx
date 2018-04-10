import * as React from "react";
import { Link } from "react-router-dom";
import "./third-container.less";
import { Layout, Menu, Breadcrumb, Icon,Tabs  } from 'antd';
import  './index.css';
import imgURL from './img/icon1.png';
import axios from 'axios';
 

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

 
class ThirdPage extends React.Component {
   

  constructor(props) {

    super(props);

    this.state = {

   
    } 
  }
 
 
 
    componentWillUnmount() {
        console.log("third page willunmount");
    }
    
    render() {
   
 
        return (
            <div>

                szh 测试git
            </div>
        );
    }
}

export default ThirdPage;