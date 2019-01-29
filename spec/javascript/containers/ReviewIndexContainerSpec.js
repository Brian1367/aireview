import ReviewIndexContainer from '../../../app/javascript/react/containers/ReviewIndexContainer';
import ReviewShowTile from '../../../app/javascript/react/components/ReviewShowTile';
import { mount } from "enzyme";
import jasmineEnzyme from "jasmine-enzyme";
import React from "react";

describe('ReviewIndexContainer', () => {
  let wrapper;
  const props = {
    user: "Mike",
    description: "description",
    price: "2",
    service: "1",
    reliability: "2",
    overall: "1"
  }

  beforeEach(() => {
    wrapper = mount(<ReviewIndexContainer {...props} />);
  })

  it('should render a review show tile component with information', () => {
    expect(wrapper.find('.user').nodes[2].innerHTML).toMatch('Mike')
    expect(wrapper.find('.description').nodes[2].innerHTML).toMatch('description')
    expect(wrapper.find('.price').nodes[2].innerHTML).toMatch('2')
    expect(wrapper.find('.service').nodes[2].innerHTML).toMatch('1')
    expect(wrapper.find('.reliability').nodes[2].innerHTML).toMatch('2')
    expect(wrapper.find('.overall').nodes[2].innerHTML).toMatch('1')
  });

});
