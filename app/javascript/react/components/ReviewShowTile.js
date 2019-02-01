import React from "react";
import { browserHistory, Link } from "react-router";
import VoteCounter from './VoteContainer'

const ReviewShowTile = props => {
  return (

  <div className="review-tile">
    <div className="row">
      <div className="panel radius">
      <div className="row">
      <div className="large-1 columns">
        <VoteCounter/>
        </div>
        <div className="large-11 columns">
        <p className="description">{props.description}</p>
        <p className="price">Price Value: {props.price}</p>
        <p className="service">Service Quality: {props.service}</p>
        <p className="reliability">Reliability Schdule: {props.reliability}</p>
        <p className="overall">Overall Rating: {props.overall}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ReviewShowTile;
