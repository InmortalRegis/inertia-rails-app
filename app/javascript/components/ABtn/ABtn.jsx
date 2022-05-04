import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/inertia-react";

const ABtn = (props) => {
  return !props.href ? (
    <button className="abtn btn-indigo" {...props}>
      {props.children}
    </button>
  ) : (
    <Link className="abtn btn-indigo" {...props}>
      {props.children}
    </Link>
  );
};

ABtn.propTypes = {};

export default ABtn;
