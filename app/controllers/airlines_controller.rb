class AirlinesController < ApplicationController

  def index
    @airlines = Airline.all
  end

  def show
    @airline = Airline.find(params[:id])
  end

  def new
    @airline = Airline.new
  end


private

def airline_params
  params.require(:airline).permit(:name, :destinations, :overall_rating)
  end
end
