Rails.application.routes.draw do

  root "chatroom#index"
  get "login", to: "sessions#new"
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
