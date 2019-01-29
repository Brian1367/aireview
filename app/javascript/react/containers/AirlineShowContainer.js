import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import AirlineShowTile from "../components/AirlineShowTile";
import NewReviewFormContainer from "./NewReviewFormContainer";

class AirlineShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airline: "",
      destinations: "",
      rating: ""
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
          airline: responseBody.name,
          destinations: responseBody.destinations,
          rating: responseBody.overall_rating
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
        <div className="contianer">
          <NewReviewFormContainer
            key={this.props.params.id}
            id={this.props.params.id}
          />
        </div>
      </div>
    );
  }
}
export default AirlineShowContainer;
