import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { https } from "./../../services/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_INFO } from "./../../redux/constant/user";
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log("res login", res.data.content);
        message.success("Login Success!");
        // lưu data user dưới dạng json để khi reload không bị mất dữ liệu
        let userData = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFO", userData);
        dispatch({
          type: SET_INFO,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        message.error("Wrong Account!");
        navigate("/");
      });
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form-login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="taikhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="input-login" placeholder="Username" />
        </Form.Item>

        <Form.Item
          label=""
          name="matkhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input-login" placeholder="Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            className="bg-sky-400 w-full"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormLogin;
