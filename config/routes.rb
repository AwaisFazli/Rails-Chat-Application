Rails.application.routes.draw do

  root "chatroom#index"
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to:"sessions#destroy"
  post "message", to:"messages#create"

  mount ActionCable.server, at: '/cable'

  get '/signup', to: 'registrations#new'
  post '/signup', to: 'registrations#create'

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
