import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import MemoryUtils from "../../utils/MemoryUtils";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav/LeftNav";
import Header from "../../components/header/Header";

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
          <Content style={{ backgroundColor: "#FFF" }}>Content</Content>
          <Footer style={{ textAlign: "center", color: "#ccc" }}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
