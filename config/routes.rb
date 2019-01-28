Rails.application.routes.draw do
  root 'airlines#index'

  resources :airlines, only:[:index, :new, :create, :show]
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :airlines, only: [:show]
    end
  end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
