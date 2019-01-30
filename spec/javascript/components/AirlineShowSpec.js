import AirlineShowTile from "../../../app/javascript/react/components/AirlineShowTile";
import { mount } from "enzyme";
import jasmineEnzyme from "jasmine-enzyme";
import React from "react";

describe("AirlineShowTile", () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <AirlineShowTile
        airline="American Airlines"
        destinations="Argentina"
        rating="5"
      />
    );
  });

  it("should render an h1 tag", () => {
    expect(wrapper.find("h1")).toBePresent();
  });

  it("should render an h1 tag with the text Airline: American Airlines", () => {
    expect(wrapper.find(".airline").text()).toBe("Airline: American Airlines");
  });

  it("should render an p tag with the text Destinations: Argentina", () => {
    expect(wrapper.find(".destinations").text()).toBe(
      "Destinations: Argentina"
    );
  });
});
