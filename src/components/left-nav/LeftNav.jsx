import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./LeftNav.less";
import { PieChartOutlined, MailOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

export default class LeftNav extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <div className="left-nav">
          <Link to="/" className="left-nav-header">
            <h1 className="header-title">Admin Panel</h1>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Items">
            <Menu.Item key="2" icon={<MailOutlined />}>
              Category
            </Menu.Item>
            <Menu.Item key="3" icon={<MailOutlined />}>
              Product
            </Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
