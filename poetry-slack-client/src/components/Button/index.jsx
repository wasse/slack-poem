import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { children, className, defaultText, disabled, ...other } = props;

  return (
    <button className={className} disabled={disabled} {...other}>
      <strong>{children || defaultText}</strong>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  defaultText: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  className: "",
  defaultText: "...",
  disabled: false
};

export default Button;
