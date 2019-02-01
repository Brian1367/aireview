import React, { Component } from "react";
import DescriptionField from "../components/DescriptionField";
import PriceRatingField from "../components/PriceRatingField";
import ServiceRatingField from "../components/ServiceRatingField";
import ReliabilityRatingField from "../components/ReliabilityRatingField";
import OverallRatingField from "../components/OverallRatingField";
import { browserHistory } from "react-router";

class NewReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:[],
      reviewDescription: "",
      reviewPriceRating: 1,
      reviewServiceRating: 1,
      reviewReliabilityRating: 1,
      reviewOverallRating: 1
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceRatingChange = this.handlePriceRatingChange.bind(this);
    this.handleServiceRatingChange = this.handleServiceRatingChange.bind(this);
    this.handleReliabilityRatingChange = this.handleReliabilityRatingChange.bind(this);
    this.handleOverallRatingChange = this.handleOverallRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this),
    this.handleClear = this.handleClear.bind()
  }

  // addNewReview(formPayload) {
  //   let jsonStringInfo = JSON.stringify(formPayload);
  //   fetch(`/api/v1/airlines/${this.props.id}/reviews`, {
  //     method: "POST",
  //     body: jsonStringInfo,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     credentials: "same-origin"
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then(formPayload => formPayload.json())
  //     .then(formPayload => {
  //       this.setState({
  //       reviews: this.state.reviews.concat(formPayload)
  //     })
  //     console.log(this.props.id);
  //       browserHistory.push(`/airlines/${this.props.id}`);
  //     });
  // }

  handlePriceRatingChange(event) {
    this.setState({ reviewPriceRating: event.target.value });
  }
  handleServiceRatingChange(event) {
    this.setState({ reviewServiceRating: event.target.value });
  }
  handleReliabilityRatingChange(event) {
    this.setState({ reviewReliabilityRating: event.target.value });
  }

  handleOverallRatingChange(event) {
    this.setState({ reviewOverallRating: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ reviewDescription: event.target.value });
  }
  handleClear(event){

  }

  handleSubmit(event) {
    event.preventDefault();
    // event.target.reset();

    let formPayload = {
      description: this.state.reviewDescription,
      price_rating: this.state.reviewPriceRating,
      service_rating: this.state.reviewServiceRating,
      reliability_rating: this.state.reviewReliabilityRating,
      overall_rating: this.state.reviewOverallRating,
      airline_id: this.props.id
    };


    this.props.addNewReview(formPayload);
    this.setState({reviewDescription: '' ,
                   reviewPriceRating: 1 ,
                   reviewServiceRating: 1 ,
                   reviewReliabilityRating: 1,
                   reviewOverallRating: 1
                 });
   }


  render() {
    return (
      <div>
        <h3 className="new-article-header"> Tell us what you think </h3>
        <form className="new-article-form callout"
        onSubmit={this.handleSubmit}>
          <DescriptionField
            content={this.state.reviewDescription}
            label="Review Description"
            name="review-description"
            handleDescriptionChange={this.handleDescriptionChange}
          />
          <PriceRatingField
            content={this.state.reviewPriceRating}
            label="Price Rating"
            name="price-rating"
            handlePriceRatingChange={this.handlePriceRatingChange}
          />
          <ServiceRatingField
            content={this.state.reviewServiceRating}
            label="Service Rating"
            name="service-rating"
            handleServiceRatingChange={this.handleServiceRatingChange}
          />
          <ReliabilityRatingField
            content={this.state.reviewReliabilityRating}
            label="Reliability Rating"
            name="reliability-rating"
            handleReliabilityRatingChange={this.handleReliabilityRatingChange}
          />
          <OverallRatingField
            content={this.state.reviewOverallRating}
            label="Overall Rating"
            name="overall-rating"
            handleOverallRatingChange={this.handleOverallRatingChange}
          />

          <div className="button-group">
            <button className="button" onClick={this.handleClear}>Clear</button>
            <input className="button" type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewReviewPage;
