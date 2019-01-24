require 'spec_helper'

describe Airline do
  it { should have_valid(:name).when("ScotlandAir")}
  it {should_not have_valid(:name).when(nil, "")}

  it { should have_valid(:destinations).when("Korea")}
  it { should_not have_valid(:destinations).when(nil, "")}

  it { should have_valid(:overall_rating).when(4)}
  it { should_not have_valid(:overall_rating).when(0, 17, 'g')}
end
