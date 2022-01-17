import React from "react";

import "./form-input.styles.scss";


const FormInput = ({
  handleChange,
  label,
  isRequired,
  isTextArea,
  infoText,
  showValidationMessage,
  validationMessage,
  ...otherProps
}) => (
  <div className="group">
    {label ? (
      <label>
        {label}
        {isRequired ? (
          <span>
            <i> (required)</i>
          </span>
        ) : null}{" "}
      </label>
    ) : null}
    {isTextArea ? (
      <textarea
        className="text-area-input"
        onChange={handleChange}
        {...otherProps}
      />
    ) : (
      <div>
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {showValidationMessage === false && (
          <span className="invalid-message">{validationMessage}</span>
        )}
      </div>
    )}
  </div>
);

export default FormInput;
