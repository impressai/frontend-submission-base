import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

import "./multi-select-dropdown.styles.scss";

const MultiSelectDropdown = ({
  onSelect,
  onRemove,
  label,
  options,
    displayValue,
  isRequired,
  ...otherProps
}) => (
  <div className="group multiselect">
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
    <Multiselect
      closeIcon="circle"
      options={options} // Options to display in the dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event';
      displayValue={displayValue}
    />
  </div>
);

export default MultiSelectDropdown;
