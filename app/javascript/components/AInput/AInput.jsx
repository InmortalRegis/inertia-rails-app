import React from "react";
import PropTypes from "prop-types";
import "./AInput.css";
const AInput = (props) => {
  return (
    <div>
      {props.label && (
        <label className="mb-2 select-none block">{props.label}:</label>
      )}
      <input className="a-input" {...props} />
    </div>
  );
};

AInput.propTypes = {};

export default AInput;
