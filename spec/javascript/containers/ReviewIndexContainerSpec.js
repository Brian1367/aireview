import ReviewIndexContainer from '../../../app/javascript/react/containers/ReviewIndexContainer';
import { mount } from "enzyme";
import jasmineEnzyme from "jasmine-enzyme";
import React from "react";

describe('ReviewIndexContainer', () => {
  let wrapper;
  const reviews = [{
    id: "1",
    user_id: "1",
    description: "description",
    price_rating: "2",
    service_rating: "1",
    reliability_rating: "2",
    overall_rating: "1"
  }]

  beforeEach(() => {
    wrapper = mount(<ReviewIndexContainer reviews = {reviews}  />);
  })

  it('should render a review show tile component with information', () => {
    expect(wrapper.find('.description')).toBePresent()
  });

});
