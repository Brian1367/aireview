class Airline < ApplicationRecord
  validates :name, presence: true
  validates :destinations, presence: true
  validates :overall_rating, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..5, message: "must be between 1 - 5"}

end
