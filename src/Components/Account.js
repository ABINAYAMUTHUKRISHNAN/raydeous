import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Upload,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  message,
  Layout,
  Divider
} from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";

  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

class Account extends Component {
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { Content } = Layout;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="180">+14</Option>
      </Select>
    );

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;

    return (
      <Layout
        style={{ backgroundColor: "#fff", padding: "70px 70px  70px 70px" }}
      >
        <h1
          style={{
            fontFamily: "Times",
            fontSize: 50,
            marginBottom: "0.1em",
            fontWeight: "bold"
          }}
        >
          My Account
        </h1>
        <Divider style={{ height: 5 }} />
        <Content
          className="cont"
          style={{
            backgroundColor: "#fff",
            height: "fitcontent",
            padding: "50px 0px  50px 0px"
          }}
        >
          <Col span={2} />
          <Col span={16}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    Business name&nbsp;
                    <Tooltip title="What do you want others to call your business?" />
                  </span>
                }
              >
                {getFieldDecorator("business name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Business name!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="Business Name" />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Mobile Number">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder="Mobile Number"
                  />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input placeholder="E-mail ID" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    Map Location&nbsp;
                    <Tooltip title="Location in Latitude and Longitude" />
                  </span>
                }
              >
                {getFieldDecorator("location", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Location!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="Latitude, Longitude" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    Address&nbsp;
                    <Tooltip title="Where do you stay?" />
                  </span>
                }
              >
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your address!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="Address" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    City&nbsp;
                    <Tooltip title="Which is your city?" />
                  </span>
                }
              >
                {getFieldDecorator("city", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your city!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="City" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    State&nbsp;
                    <Tooltip title="What is your state?" />
                  </span>
                }
              >
                {getFieldDecorator("state", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your state!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="State" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    ZipCode&nbsp;
                    <Tooltip title="What is your ZipCode?" />
                  </span>
                }
              >
                {getFieldDecorator("zipcode", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your zipcode!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="ZipCode" />)}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label={
                  <span>
                    Business Type&nbsp;
                    <Tooltip title="What is your Business type?" />
                  </span>
                }
              >
                {getFieldDecorator("business type", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Business type!",
                      whitespace: true
                    }
                  ]
                })(
                  <Select defaultValue="1" placeholder="Business Type">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Category">
                {getFieldDecorator("category", {
                  initialValue: ["A", "B"],
                  rules: [
                    {
                      required: true,
                      message: "Please select category",
                      type: "array"
                    }
                  ]
                })(
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="A">A</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">B</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">C</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="D">D</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">E</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Username">
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Confirm Password">
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    onBlur={this.handleConfirmBlur}
                    placeholder="Confirm Password"
                  />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="File Upload">
                {getFieldDecorator("file", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your profile picture!"
                    }
                  ]
                })(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? (
                      <img src={imageUrl} alt="avatar" />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <div style={{ paddingRight: 100 }}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                  <span style={{ padding: 40 }} />
                  <Button type="primary" htmlType="submit">
                    Cancel
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6} />
        </Content>
      </Layout>
    );
  }
}
export const WrappedRegistrationForm = Form.create({ name: "register" })(
  Account
);
