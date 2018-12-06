class UserTicketsController < ApplicationController
  before_action :set_user
  before_action :set_user_ticket, only: [:show, :update, :destroy]

  # GET /users/:user_id/tickets
  def index
    json_response(@user.tickets)
  end

  # POST /users/:user_id/tickets
  def create
    UserTicket.create!(user_ticket_params)
    json_response(:created)
  end

  # DELETE /users/:user_id/tickets/:id
  def destroy
    UserTicket.find_by!(user_id: params[:user_id], ticket_id: params[:ticket_id]).destroy()
    head :no_content
  end

  private

  def ticket_params
    params.permit(:from, :to, :departure, :arrival, :no_of_cards, :price)
  end

  def user_ticket_params
    params.permit(:user_id, :ticket_id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_ticket
    @ticket = @user.tickets.find_by!(id: params[:id]) if @user
  end
end
