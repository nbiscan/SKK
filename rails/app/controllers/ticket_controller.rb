class TicketController < ApplicationController
  skip_before_action :authorize_request

  # GET /tickets
  def getall
    @tickets = Ticket.all
    json_response(@tickets)
  end
end
