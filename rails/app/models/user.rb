class User < ApplicationRecord
  has_secure_password

  has_many :user_tickets
  has_many :tickets, through: :user_tickets

  validates_presence_of :email, :password_digest
end
