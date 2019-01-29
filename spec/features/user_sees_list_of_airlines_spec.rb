require 'rails_helper'

# [] Visiting the `/airlines` path should contain a list of airlines.
# [] Visiting the `/airlines/10` path should show the airline details for a airline with the ID of 10.
# [] Visiting the root path should display a list of all airlines.
feature "visitor sees a list of airlines" do
  scenario "sees a list of airlines and link for new airline" do
    american_airlines = Airline.create(name: 'American Airlines', destinations:"Argentina, Brazil, New Zealand, South korea, Russia", overall_rating: 5)

    delta_airlines = Airline.create(name: 'Delta Airlines', destinations:'Morrocco, Belgium, India, France, China', overall_rating: 4)

    visit airlines_path

    expect(page).to have_content "Delta Airlines"
    expect(page).to have_link "American Airlines"
  end
end
