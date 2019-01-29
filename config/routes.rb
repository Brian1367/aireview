Rails.application.routes.draw do
  root 'airlines#index'

  resources :airlines, only:[:index, :new, :create, :show]
  devise_for :users
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
