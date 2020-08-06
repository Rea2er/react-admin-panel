import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import MemoryUtils from "../../utils/MemoryUtils";

class Admin extends Component {
  render() {
    const user = MemoryUtils.user;
    // can find user
    if (!user || !user._id) {
      // jump to login (inside render() method)
      return <Redirect to="/login" />;
    }
    return <div>Hello {user.name}</div>;
  }
}

export default Admin;
