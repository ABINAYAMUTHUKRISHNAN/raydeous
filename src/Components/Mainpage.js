import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import Head from "./Head";
import Contents from "./Contents";
import { NavLink } from "react-router-dom";
import End from "./End";
const { Header, Content, Footer, Sider } = Layout;

class Mainpage extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink exact to="/Account">
                <Icon type="clock-circle" />
                <span>My Account</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="calendar" />
              <span>Calendar</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="rise" />
              <span>Analytics</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Head />
          <Contents />
          <End />
        </Layout>
      </Layout>
    );
  }
}
export default Mainpage;
