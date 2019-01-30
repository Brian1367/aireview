class Review < ApplicationRecord
  validates :user, presence: true
  validates :description, presence: true
  validates :price_rating, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..5, message: "must be between 1 - 5"}
  validates :service_rating, presence: true,  numericality: { only_integer: true }, inclusion: { in: 1..5, message: "must be between 1 - 5"}
  validates :reliability_rating, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..5, message: "must be between 1 - 5"}
  validates :overall_rating, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..5, message: "must be between 1 - 5"}
  belongs_to :airline
end
