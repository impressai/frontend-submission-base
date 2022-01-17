import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, disabled, ...otherProps }) => (
  <button disabled={disabled} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
