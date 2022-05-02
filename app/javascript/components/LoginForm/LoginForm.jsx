import React from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";
import ABtn from "../ABtn/ABtn";
import AInput from "../AInput/AInput";
const LoginForm = (props) => {
  return (
    <div className={props.className + " " + "login-form"}>
      <h1 className="mb-3 text-center text-2xl font-bold">Iniciar sesion !</h1>
      <form onSubmit={props.handleSubmit} className="flex flex-col">
        <AInput
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
        />
        <AInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handleChange}
        />
        <ABtn type="submit">Iniciar sesión</ABtn>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
