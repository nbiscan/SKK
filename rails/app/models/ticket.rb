class Ticket < ApplicationRecord
  belongs_to :carrier

  has_and_belongs_to_many :users

  validates_presence_of :from, :to, :departure, :arrival, :no_of_cards, :price
end
