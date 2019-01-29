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

  it("should render an p tag with the text Mike", () => {
    expect(wrapper.find(".user").text()).toBe(
      "Mike"
    );
  });

  it("should render an p tag with the text description", () => {
    expect(wrapper.find(".description").text()).toBe(
      "description"
    );
  });

  it("should render an p tag with the text price", () => {
    expect(wrapper.find(".price").text()).toBe(
      "2"
    );
  });

  it("should render an p tag with the text service", () => {
    expect(wrapper.find(".service").text()).toBe(
      "1"
    );
  });

  it("should render an p tag with the text reliability", () => {
    expect(wrapper.find(".reliability").text()).toBe(
      "2"
    );
  });

  it("should render an p tag with the text overall", () => {
    expect(wrapper.find(".overall").text()).toBe(
      "1"
    );
  });
});
