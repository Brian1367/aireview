class Api::V1::AirlinesController < ApplicationController

  def show
    render json: Airline.find(params[:id])
  end

  def new
    render json: Airline.new
  end

  def create
    render json: Airline.new(airline_params)
  end

  def airline_params
    params.require(:airline).permit(:name, :destinations, :overall_rating)
  end
end
