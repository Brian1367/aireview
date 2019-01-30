import React from "react";

const OverallRatingField = props => {
  let nums = [];
  for (let i = 1; i < 6; i++) {
    nums.push(
      <option value={`${i}`} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <label>{props.label}</label>
      <select
        id={props.id}
        name="overall-rating"
        onChange={props.handleOverallRatingChange}
      >
        {nums}
      </select>
    </div>
  );
};

export default OverallRatingField;
