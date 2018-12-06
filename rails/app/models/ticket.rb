class Ticket < ApplicationRecord
  belongs_to :carrier

  has_many :user_tickets
  has_many :users, through: :user_tickets

  validates_presence_of :from, :to, :departure, :arrival, :no_of_cards, :price
end
