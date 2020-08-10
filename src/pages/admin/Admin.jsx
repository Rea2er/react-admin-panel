import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
// import MemoryUtils from "../../utils/MemoryUtils";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav/LeftNav";
import Header from "../../components/header/Header";
import Home from "../home/Home";
import Categories from "../categories/Categories";
import Bar from "../charts/Bar";
import Line from "../charts/Line";
import Pie from "../charts/Pie";
import Products from "../products/Products";
import Roles from "../roles/Roles";
import Users from "../users/Users";

const { Footer, Sider, Content } = Layout;

class Admin extends Component {
  render() {
    // const user = MemoryUtils.user;
    // // can find user
    // if (!user || !user._id) {
    //   // jump to login (inside render() method)
    //   return <Redirect to="/login" />;
    // }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ margin: 20, backgroundColor: "#FFF" }}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/categories" component={Categories} />
              <Route path="/products" component={Products} />
              <Route path="/users" component={Users} />
              <Route path="/roles" component={Roles} />
              <Route path="/bar" component={Bar} />
              <Route path="/line" component={Line} />
              <Route path="/pie" component={Pie} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#ccc" }}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
