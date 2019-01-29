import React from "react";
import { browserHistory, Link } from "react-router";

const ReviewShowTile = props => {
  return (

  <div className="review-tile">
    <div className="row">
      <div className="panel radius">
        <p className="user">{props.user}</p>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
        <p className="service">{props.service}</p>
        <p className="reliability">{props.reliability}</p>
        <p className="overall">{props.overall}</p>
      </div>
    </div>
  </div>
  );
};

export default ReviewShowTile;
