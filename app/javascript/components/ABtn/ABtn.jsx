import React from "react";
import PropTypes from "prop-types";

const ABtn = (props) => {
  return (
    <button className="abtn btn-indigo" {...props}>
      {props.children}
    </button>
  );
};

ABtn.propTypes = {};

export default ABtn;
