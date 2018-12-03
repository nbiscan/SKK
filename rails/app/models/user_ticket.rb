class UserTicket < ApplicationRecord
  belongs_to :user, inverse_of: user_tickets
  belongs_to :ticket, inverse_of: user_tickets
end
