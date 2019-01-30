class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
   before_action :authorize_user, except: :show


  def create
    new_review = Review.new(description: review_params[:description], price_rating: review_params[:price_rating], service_rating: review_params[:service_rating], reliability_rating: review_params[:reliability_rating], overall_rating: review_params[:overall_rating], airline_id: review_params[:airline_id], user: current_user)

    render json: new_review
  end

  def destroy
    if current_user_access
      Review.destroy(params[:id])
    else
      render json: {message: "You can only delete your own reviews."}, status: 401
    end
  end

  private

  def review_params
    params.permit(:description, :price_rating, :service_rating, :reliability_rating, :overall_rating, :airline_id)
  end

  def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to create a review."}
    
    end
  end

  def current_user_access
    current_user.id == Review.find(params[:id]).user_id
  end
end
