import React from 'react';
import { browserHistory, Link } from 'react-router';

const AirlineShow = (props) => {
  return(
    <div className="airline-show">
      <h2>{props.name}</h2>
      <p>{props.destinations}</p>
      <p>{props.overall_rating}</p>

      <div className="button">
        Back
      </div>

    </div>
  )
}

export default AirlineShow;
