import React from 'react';
import { browserHistory, Link } from 'react-router';

const AirlineShowTile = (props) => {
  return (
    <div className="row">
      <div className="panel radius">
        <h1>Airline: {props.airline} </h1>
          <p>Destinations: {props.destinations} </p>
        <p>Overall Rating: {props.rating}</p>
      </div>
    </div>
  )

}

export default AirlineShowTile;
