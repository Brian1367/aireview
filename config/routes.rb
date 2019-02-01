Rails.application.routes.draw do
  root 'airlines#index'

  resources :airlines, only: [:new, :index, :show, :create]
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :airlines, only: [:index, :show] do
        resources :reviews, only: [:create, :show]
      end
    end
  end
end
