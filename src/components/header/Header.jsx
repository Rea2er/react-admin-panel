import React, { Component } from "react";
import "./Header.less";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <span>Welcome, Admin</span>
          <a href="javascript:">Quit</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">Home</div>
          <div className="header-bottom-right">
            <span>Date</span>
            <img alt="Weather" />
            <span>Time</span>
          </div>
        </div>
      </div>
    );
  }
}
