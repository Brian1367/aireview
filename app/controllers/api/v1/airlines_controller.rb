class Api::V1::AirlinesController < ApplicationController

  def show
    render json: Airline.find(params[:id])
  end

end
