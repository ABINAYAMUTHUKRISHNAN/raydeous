import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import {
  message,
  Layout,
  Input,
  Row,
  Col,
  DatePicker,
  Form,
  TimePicker,
  Menu,
  Dropdown,
  Icon,
  Upload,
  Button
} from "antd";

class Form_sam extends Component {
  constructor() {
    super();

    this.state = {
      date: "",
      start_time: "",
      end_time: "",
      title: "",
      price: "",
      category: "",
      img: "",
      status: ""
    };
  }

  onDate(date, dateString) {
    console.log(date, dateString);
  }

  onChange(time, timeString) {
    console.log(time, timeString);
  }

  onOk(value) {
    console.log("onOk: ", value);
  }

  render() {
    const { RangePicker } = DatePicker;
    const { Header, Footer, Sider, Content } = Layout;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 4 }
      }
    };
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="user" />
          1st item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const inps = {
      name: "file",
      action: "//jsonplaceholder.typicode.com/posts/",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div className="back">
        <br />
        <h1 className="head">REGISTRATION FORM</h1>
        <Row>
          <Col span={8} />
          <Col className="content" span={8}>
            <Form>
              <div className="text">
                <Form.Item {...formItemLayout} label="Date">
                  <div className="element">
                    <DatePicker
                      className="inp"
                      showTime
                      placeholder="Select Date"
                      onChange={this.onDate}
                      onOk={this.onOk}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Start Time">
                  <div className="element">
                    <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                      onChange={this.onChange}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="End Time">
                  <div className="element">
                    <TimePicker
                      className="inp"
                      use12Hours
                      format="h:mm a"
                      onChange={this.onChange}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Title">
                  <div className="element">
                    <Input className="inp" type="text" />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Price">
                  <div className="element">
                    <Input className="inp" type="number" />
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Category">
                  <div className="element">
                    <Dropdown overlay={menu}>
                      <Button className="inp">
                        CATEGORY
                        <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Image">
                  <Upload {...inps}>
                    <div className="element">
                      <Button className="inp">
                        <Icon type="upload" /> CLICK TO UPLOAD
                      </Button>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
              <div className="text">
                <Form.Item {...formItemLayout} label="Status">
                  <div className="element">
                    <Dropdown overlay={menu}>
                      <Button className="inp">
                        STATUS <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </div>
                </Form.Item>
              </div>
              <div>
                <Link to="/Details">
                  <Button className="but">Save</Button>
                </Link>
                <span style={{ padding: 40 }} />
                <Button className="but">Cancel </Button>
              </div>
            </Form>
          </Col>
          <Col span={8} />
        </Row>
      </div>
    );
  }
}
export default Form_sam;
