class UserTicketsController < ApplicationController
  before_action :set_user

  # GET /users/:user_id/tickets
  def index
    json_response(@user.tickets)
  end

  # POST /users/:user_id/tickets
  def create
    @userticket = UserTicket.create!(user_id: params[:user_id], ticket_id: params[:ticket_id])
    json_response(@userticket, :created)
  end

  # DELETE /users/:user_id/tickets/:id
  def destroy
    UserTicket.where(user_id: params[:user_id], ticket_id: params[:ticket_id]).destroy_all
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
