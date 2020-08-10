import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import FA from "react-fontawesome";

import menuList from "../../config/menuConfig";
import "./LeftNav.less";

const { SubMenu } = Menu;

class LeftNav extends Component {
  state = {
    collapsed: false,
    openKey: null,
    menuNodes: [],
  };

  // getMenuNodes = (menuList) => {
  //   return menuList.reduce((pre, item) => {
  //     if (!item.children) {
  //       pre.push(
  //         <Menu.Item
  //           key={item.key}
  //           icon={<FA name={item.icon} className="right" />}
  //         >
  //           <Link to={item.key}>{item.title}</Link>
  //         </Menu.Item>
  //       );
  //     } else {
  //       pre.push(
  //         <SubMenu
  //           key={item.key}
  //           title={item.title}
  //           icon={<FA name={item.icon} className="right" />}
  //         >
  //           {this.getMenuNodes(item.children)}
  //         </SubMenu>
  //       );
  //     }
  //     return pre;
  //   }, []);
  // };

  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item
            key={item.key}
            icon={<FA name={item.icon} className="right" />}
          >
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        const path = this.props.location.pathname;
        const openItem = item.children.find(
          (openItem) => openItem.key === path
        );
        if (openItem) {
          this.setState({ openKey: item.key });
        }

        return (
          <SubMenu
            key={item.key}
            title={item.title}
            icon={<FA name={item.icon} className="right" />}
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentWillMount() {
    this.setState({ menuNodes: this.getMenuNodes(menuList) });
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <>
        <div className="left-nav">
          <Link to="/home" className="left-nav-header">
            <h1 className="header-title">Admin Panel</h1>
          </Link>
        </div>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[this.state.openKey]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.menuNodes}
        </Menu>
      </>
    );
  }
}
export default withRouter(LeftNav);
