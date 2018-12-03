class UserTicketsController < ApplicationController
  before_action :set_user
  before_action :set_user_ticket, only: [:show, :update, :destroy]

  # GET /users/:user_id/tickets
  def index
    json_response(@user.tickets)
  end

  # GET /users/:user_id/tickets/:id
  def show
    json_response(@ticket)
  end

  # POST /users/:user_id/tickets
  def create
    @user.tickets.create!(ticket_params)
    json_response(@user, :created)
  end

  # PUT /users/:user_id/tickets/:id
  def update
    @ticket.update(ticket_params)
    head :no_content
  end

  # DELETE /users/:user_id/tickets/:id
  def destroy
    @ticket.destroy
    head :no_content
  end

  private

  def ticket_params
    params.permit(:from, :to, :departure, :arrival, :no_of_cards, :price)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_ticket
    @ticket = @user.tickets.find_by!(id: params[:id]) if @user
  end
end
