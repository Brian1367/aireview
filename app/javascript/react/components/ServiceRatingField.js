import React from "react";

const ServiceRatingField = props => {
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
      <select name="service-rating" onChange={props.handleServiceRatingChange}>
        {nums}
      </select>
    </div>
  );
};

export default ServiceRatingField;
