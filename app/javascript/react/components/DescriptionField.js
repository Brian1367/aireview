import React from "react";

const DescriptionField = props => {
  return (
    <label>
      {props.label}
      <textarea
        name="description-field"
        type="text"
        value={props.content}
        onChange={props.handleDescriptionChange}
      />
    </label>
  );
};

export default DescriptionField;
