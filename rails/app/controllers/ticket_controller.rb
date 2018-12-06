class TicketController < ApplicationController
  skip_before_action :authorize_request

  # GET /tickets
  def getall
    @tickets = Ticket.all
    json_response(@tickets)
  end

  # PUT /tickets/:ticket_id
  def edit
    @ticket = Ticket.find(params[:ticket_id])
    @ticket.no_of_cards = @ticket.no_of_cards - 1
  end
end
