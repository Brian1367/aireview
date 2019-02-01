import ReviewShowTile from "../../../app/javascript/react/components/ReviewShowTile";
import { mount } from "enzyme";
import jasmineEnzyme from "jasmine-enzyme";
import React from "react";

describe("ReviewShowTile", () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ReviewShowTile
        user= "Mike"
        description= "description"
        price= "2"
        service= "1"
        reliability= "2"
        overall= "1"
      />
    );
  });



  it("should render an p div with the className of description with the text description", () => {
    expect(wrapper.find(".description").text()).toBe(
      "description"
    );
  });

  it("should render an p div with the className of price with the text 2", () => {
    expect(wrapper.find(".price").text()).toBe(
      "Price Value: 2"
    );
  });

  it("should render an p div with the className of service with the text 1", () => {
    expect(wrapper.find(".service").text()).toBe(
      "Service Quality: 1"
    );
  });

  it("should render an p div with the className of reliability with the text 2", () => {
    expect(wrapper.find(".reliability").text()).toBe(
      "Reliability Schdule: 2"
    );
  });

  it("should render an p div with the className of overall with the text 1", () => {
    expect(wrapper.find(".overall").text()).toBe(
      "Overall Rating: 1"
    );
  });
});
