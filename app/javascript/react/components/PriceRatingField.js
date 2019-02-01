import React from "react";

const PriceRatingField = props => {
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
        name="price-rating"
        onChange={props.handlePriceRatingChange}
      >
        {nums}
      </select>
    </div>
  );
};

export default PriceRatingField;
