require 'rails_helper'
require 'spec_helper'

RSpec.describe Review, type: :model do
  describe "Review model" do

    it { should have_valid(:description).when("World class Ariline") }
    it { should_not have_valid(:description).when(nil, "") }

    it { should have_valid(:price_rating).when(1) }
    it { should have_valid(:price_rating).when(3) }
    it { should have_valid(:price_rating).when(5) }
    it { should_not have_valid(:price_rating).when(-1) }
    it { should_not have_valid(:price_rating).when(11) }
    it { should_not have_valid(:price_rating).when(5.5) }
    it { should_not have_valid(:price_rating).when(nil, "") }

    it { should have_valid(:service_rating).when(1) }
    it { should have_valid(:service_rating).when(3) }
    it { should have_valid(:service_rating).when(5) }
    it { should_not have_valid(:service_rating).when(-1) }
    it { should_not have_valid(:service_rating).when(11) }
    it { should_not have_valid(:service_rating).when(5.5) }
    it { should_not have_valid(:service_rating).when(nil, "") }

    it { should have_valid(:reliability_rating).when(1) }
    it { should have_valid(:reliability_rating).when(3) }
    it { should have_valid(:reliability_rating).when(5) }
    it { should_not have_valid(:reliability_rating).when(-1) }
    it { should_not have_valid(:reliability_rating).when(11) }
    it { should_not have_valid(:reliability_rating).when(5.5) }
    it { should_not have_valid(:reliability_rating).when(nil, "") }

    it { should have_valid(:overall_rating).when(1) }
    it { should have_valid(:overall_rating).when(3) }
    it { should have_valid(:overall_rating).when(5) }
    it { should_not have_valid(:overall_rating).when(-1) }
    it { should_not have_valid(:overall_rating).when(11) }
    it { should_not have_valid(:overall_rating).when(5.5) }
    it { should_not have_valid(:overall_rating).when(nil, "") }
  end
end
