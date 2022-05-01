import React from "react";
import PropTypes from "prop-types";

const ABtn = (props) => {
  return (
    <button
      className="a-btn px-6 py-3 rounded-lg bg-gray-400 text-white font-bold"
      {...props}
    >
      {props.children}
    </button>
  );
};

ABtn.propTypes = {};

export default ABtn;
