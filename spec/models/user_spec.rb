require 'rails_helper'

RSpec.describe User, type: :model do
  describe "User model" do
    it { should have_valid(:email).when("richard@gmail.com") }
    it { should_not have_valid(:email).when("richard.com") }
    it { should_not have_valid(:email).when(nil, "") }
    it { should have_valid(:encrypted_password).when("Smith") }
    it { should_not have_valid(:encrypted_password).when(nil, "") }
 end
end
