import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Inertia } from "@inertiajs/inertia";
import FlashMessages from "../../components/FlashMessages/FlashMessages";
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
    console.log(window.$routes.user_session());
    Inertia.post(window.$routes.user_session(), {
      user: loginState,
    });
  };
  return (
    <div className="login-page">
      <FlashMessages />
      <LoginForm
        className="w-6/12"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </div>
  );
};

export default Login;
