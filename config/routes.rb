Rails.application.routes.draw do
  root 'airlines#index'

  resources :airlines, only: [:index, :show]
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :airlines, only: [:show] do
        resources :reviews, only: [:create]
      end
    end
  end
end
