import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import AirlineShowTile from "../components/AirlineShowTile";
import ReviewIndexContainer from "./ReviewIndexContainer";
import NewReviewFormContainer from "./NewReviewFormContainer";

class AirlineShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airline: "",
      destinations: "",
      rating: "",
      reviews: []
    };
  }
  componentDidMount() {
    let id = this.props.params.id;
    fetch(`/api/v1/airlines/${id}`)
      .then(response => {
        let responseBody = response.json();
        return responseBody;
      })
      .then(responseBody => {
        this.setState({
          airline: responseBody.airline.name,
          destinations: responseBody.airline.destinations,
          rating: responseBody.airline.overall_rating,
          reviews: responseBody.reviews
        });
      });
  }

  render() {
    return (
      <div>
        <AirlineShowTile
            key={this.props.params.id}
            airline={this.state.airline}
            destinations={this.state.destinations}
            rating={this.state.rating}
        />
        <ReviewIndexContainer reviews={this.state.reviews} />
        <div className="row">
          <div className="small-4 large-6 columns">
            <div className="panel callout radius">
              <NewReviewFormContainer
              key={this.props.params.id}
              id={this.props.params.id}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AirlineShowContainer;
