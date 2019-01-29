import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import ReviewShowTile from '../components/ReviewShowTile'

class ReviewIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: 1,
          user: "sdljksdljfklsf",
          description: "jsdkldjkasda",
          price: 2,
          service: 1,
          reliability: 2,
          overall: 3

        }, {
          id: 2,
          user: "fkdslfkds;f",
          description: "fofksdl;fkls",
          price: 2,
          service: 2,
          reliability: 3,
          overall: 1

        }, {
          id: 3,
          user: "Mike",
          description: "description",
          price: "2",
          service: "1",
          reliability: "2",
          overall: "1"
        }
      ]
    }
  }

  componentDidMount() {}

  render() {
      let reviews = this.state.reviews.map(review => {
        return(
          <ReviewShowTile
           key={review.id}
           id={review.id}
           user={review.user}
           description={review.description}
           price={review.price}
           service={review.service}
           reliability={review.reliability}
           overall={review.overall}
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
