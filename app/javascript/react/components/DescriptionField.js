import React from "react";

const DescriptionField = props => {
  return (
    <div>
      <label>{props.label}</label>
      <textarea
        name="description-field"
        type="text"
        value={props.content}
        onChange={props.handleDescriptionChange}
      />
    </div>
  );
};

export default DescriptionField;
