import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;
class End extends Component {
  render() {
    return (
      <Layout>
        <Footer style={{ maxHeight: "50px", textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
export default End;
