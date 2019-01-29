import React from "react";

const ReliabilityRatingField = props => {
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
      <select name="reliability-rating" onChange={props.handleReliabilityRatingChange}>
        {nums}
      </select>
    </div>
  );
};

export default ReliabilityRatingField;
