import React, { Component } from "react";
import { browserHistory, Link } from "react-router";

class VoteCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp(event) {
    this.setState(({ votes }) => ({ votes: votes + 1 }));
  }
  handleDown(event) {
    this.setState(({ votes }) => ({
      votes: votes - 1
    }));
  }

  render() {
    return (
      <div className="row">
        <ul className=" pricing-table">
          <div>Helpful?</div>
          <i className="fas fa-arrow-circle-up" onClick={this.handleUp} />
          <br />
          <div>{this.state.votes}</div>
          <i className="fas fa-arrow-circle-down" onClick={this.handleDown} />
        </ul>
      </div>
    );
  }
}
export default VoteCounter;
