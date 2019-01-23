class AirlinesController < ApplicationController

  def index
    @airlines = Airline.all
  end

  def show
    @airline = Airline.find(params[:id])
    @reviews = @airline.reviews
  end

  def new
    @airline = Airline.new
  end

  def create
    @airline = Airline.new(airline_params)
  if @airline.save
    flash[:notice] = "Airline added successfully"
    redirect_to airline_path(@airline)
  else
    flash[:error] = @airline.errors.full_messages.join(', ')
    render :new
  end
end


private

def airline_params
  params.require(:airline).permit(:name, :destinations, :overall_rating)
  end
end
