import React, { Component } from "react";
import {
  Layout,
  Card,
  Icon,
  Avatar,
  Divider,
  Col,
  Row,
  Breadcrumb
} from "antd";
import { NavLink } from "react-router-dom";
class Contents extends Component {
  render() {
    const { Content } = Layout;
    const { Meta } = Card;

    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Card style={{ width: 1050, height: "fit-content" }}>
            <Col span={3}>
              <img
                src="http://hdwallpapersrocks.com/wp-content/uploads/2013/10/Small-plant-of-tree-beautiful-nature.jpg"
                width="100"
              />
            </Col>
            <Col span={6}>
              <Meta
                title="Card title"
                description="This is the description"
                style={{ width: 200 }}
              />
            </Col>
            <div className="font">
              <Col span={1} />
              <Col span={4}>15-02-2019 at 8.30am</Col>
              <Col span={1}>
                <Divider type="vertical" />
              </Col>
              <Col span={2}>
                <Icon type="clock-circle" />
                10.00am
              </Col>
              <Col span={2}>
                <Icon type="clock-circle" />
                5.00pm
              </Col>
              <Col span={2}>$500.00</Col>
              <Col span={1}>
                <Divider type="vertical" />
              </Col>
              <Col span={2}>
                <NavLink to="/Form">Edit</NavLink>
              </Col>
            </div>
          </Card>
        </div>
      </Content>
    );
  }
}
export default Contents;
