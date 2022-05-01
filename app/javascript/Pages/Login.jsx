import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import "./Login.css";
const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    setLoginState({
      ...loginState,
      [name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="login-page">
      <LoginForm
        className="w-8/12"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </div>
  );
};

export default Login;
