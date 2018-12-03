class CarriersController < ApplicationController
  before_action :set_carrier, only: [:show, :update, :destroy]

  # GET /carriers
  def index
    @carriers = Carrier.all
    json_response(@carriers)
  end

  # POST /carriers
  def create
    @carrier = Carrier.create!(carrier_params)
    json_response(@carrier, :created)
  end

  # GET /carriers/:id
  def show
    json_response(@carrier)
  end

  # PUT /carriers/:id
  def update
    @carrier.update(carrier_params)
    head :no_content
  end

  # DELETE /carriers/:id
  def destroy
    @carrier.destroy
    head :no_content
  end

  private

  def carrier_params
    # whitelist params
    params.permit(:name)
  end

  def set_carrier
    @carrier = Carrier.find(params[:id])
  end
end
