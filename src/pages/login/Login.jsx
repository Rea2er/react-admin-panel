import React, { Component } from "react";
import "./Login.less";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { reqLogin } from "../../api";
import MemoryUtils from "../../utils/MemoryUtils";
import StorageUtils from "../../utils/StorageUtils";
import { Redirect } from "react-router-dom";

class Login extends Component {
  onFinish = async (values) => {
    const { username, password } = values;

    const response = await reqLogin(username, password);
    if (response.status === 0) {
      message.success("log in success");

      const user = response.data;
      //save the user to memory
      MemoryUtils.user = user;
      //save the user to localstorage
      StorageUtils.saveUser(user);
      this.props.history.replace("/");
    } else {
      message.error(response.msg);
    }
  };

  render() {
    //check the user login state
    const user = MemoryUtils.user;
    if (!user || !user._id) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login">
        <header className="login-header"></header>
        <section className="login-content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your Username!",
                },
                { min: 4, message: "At least 4 character long!" },
                { max: 12, message: "No more than 12 character long!" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "Not special character!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
