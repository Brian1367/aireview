require 'pry'
class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
   before_action :authorize_user, except: :show

  def create
    new_review = Review.new(review_params)
    new_review.user = current_user
    new_review.airline_id = params["review"]["airline_id"]
    if new_review.save
      render json: new_review
    else
      render json: {error: new_review.errors.full_messages}
    end
  end

  def show
    render json: Review.find(params[:id])
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
