Rails.application.routes.draw do
  root 'airlines#index'

  resources :airlines, only: [:index, :create, :show, :post] 
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :airlines, only: [:show] do
        resources :reviews, only: [:new, :create]
      end
    end
  end
end
