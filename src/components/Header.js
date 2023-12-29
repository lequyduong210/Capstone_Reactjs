import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  let navigate = useNavigate();
  let { user } = useSelector((state) => state.user);
  let renderMenu = () => {
    if (user) {
      // có thông tin trong redux
      return (
        <>
          <span>{user.hoTen}</span>
          <Button
            onClick={() => {
              localStorage.removeItem("USER_INFO");
              window.location.href = "/";
            }}
            className="bg-sky-500 text-white"
          >
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            className="bg-sky-500 text-white"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="bg-sky-500 text-white"
          >
            Register
          </Button>
        </>
      );
    }
  };
  return (
    <div className="header-content">
      <div className="flex justify-between items-center h-20">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="font-medium text-3xl text-red-600 animate-bounce"
        >
          CyberFilm
        </span>
        <div className="space-x-5">{renderMenu()}</div>
      </div>
    </div>
  );
}
