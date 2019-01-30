class AirlinesController < ApplicationController

  def index
    @airlines = Airline.all
  end

  def show
  end



private

 def airline_params
  params.require(:airline).permit(:name, :destinations, :overall_rating)
 end
end
