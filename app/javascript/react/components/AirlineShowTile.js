import React from "react";
import { browserHistory, Link } from "react-router";

const AirlineShowTile = props => {
  return (
    <div className="row">
      <div className="panel radius">
        <h1 className="airline">Airline: {props.airline}</h1>
        <p className="destinations">Destinations: {props.destinations}</p>
        <p className="overall-rating">Overall Rating: {props.rating}</p>
      </div>
    </div>
  );
};

export default AirlineShowTile;
