Rails.application.routes.draw do
  resources :carriers do
    resources :tickets
  end

  # resources :users do
  #   resources :tickets
  # end

  # resources :users do
  #   resources :user_tickets
  # end

  # resources :tickets do
  #   resources :user_tickets
  # end

  get "tickets", to: "ticket#getall"

  get "/users/:user_id/tickets/", to: "user_tickets#index"
  post "/users/:user_id/tickets", to: "user_tickets#create"
  delete "/users/:user_id/tickets/:ticket_id", to: "user_tickets#destroy"

  post "auth/login", to: "authentication#authenticate"
  post "signup", to: "users#create"
end
