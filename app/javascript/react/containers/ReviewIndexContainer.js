import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import ReviewShowTile from '../components/ReviewShowTile'

class ReviewIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
      let reviews = this.props.reviews.map(review => {
        return(
          <ReviewShowTile
           key={review.id}
           id={review.id}
           user={review.user_id}
           description={review.description}
           price={review.price_rating}
           service={review.service_rating}
           reliability={review.reliability_rating}
           overall={review.overall_rating}
          />
        )
      })
      return (
        <div>
          {reviews}
        </div>
    );
  }
}

export default ReviewIndexContainer;
