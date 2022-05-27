import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Inertia } from "@inertiajs/inertia";
import FlashMessages from "../../components/FlashMessages/FlashMessages";
import "./Login.css";
const Register = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    confirmation_password: "",
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
    Inertia.post(window.$routes.user_registration(), {
      user: loginState,
    });
  };
  return (
    <div className="login-page">
      <FlashMessages />
      <RegisterForm
        className="w-6/12"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></RegisterForm>
    </div>
  );
};

export default Register;
