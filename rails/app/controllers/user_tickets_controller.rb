class UserTicketsController < ApplicationController
  before_action :set_user

  # GET /users/:user_id/tickets
  def index
    json_response(@user.tickets)
  end

  # POST /users/:user_id/tickets
  def create
    @ticket = Ticket.find(params[:ticket_id])

    if @ticket.no_of_cards < 1
      return
    end

    @userticket = UserTicket.create!(user_id: params[:user_id], ticket_id: params[:ticket_id])

    # reduce number of tickets by 1 for purchase
    @ticket.update!(no_of_cards: @ticket.no_of_cards - 1)

    json_response(@userticket, :created)
  end

  # DELETE /users/:user_id/tickets/:id
  def destroy
    UserTicket.where(user_id: params[:user_id], ticket_id: params[:ticket_id]).destroy_all

    # increase number of tickets by 1 for purchase
    @ticket = Ticket.find(params[:ticket_id])
    @ticket.update!(no_of_cards: @ticket.no_of_cards + 1)

    json_response(:deleted)
  end

  private

  def user_ticket_params
    params.permit(params[:user_id], params[:ticket_id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
