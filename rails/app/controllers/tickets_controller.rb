class TicketsController < ApplicationController
  before_action :set_carrier
  before_action :set_carrier_ticket, only: [:show, :update, :destroy]

  # GET /carriers/:carrier_id/tickets
  def index
    json_response(@carrier.tickets)
  end

  # GET /carriers/:carrier_id/tickets/:id
  def show
    json_response(@ticket)
  end

  # POST /carriers/:carrier_id/tickets
  def create
    @carrier.tickets.create!(ticket_params)
    json_response(@carrier, :created)
  end

  # PUT /carriers/:carrier_id/tickets/:id
  def update
    @ticket.update(ticket_params)
    head :no_content
  end

  # DELETE /carriers/:carrier_id/tickets/:id
  def destroy
    @ticket.destroy
    head :no_content
  end

  private

  def ticket_params
    params.permit(:from, :to, :departure, :arrival, :no_of_cards, :price)
  end

  def set_carrier
    @carrier = Carrier.find(params[:carrier_id])
  end

  def set_carrier_ticket
    @ticket = @carrier.tickets.find_by!(id: params[:id]) if @carrier
  end
end
