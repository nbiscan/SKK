Rails.application.routes.draw do
  resources :carriers do
    resources :tickets
  end

  get "tickets", to: "ticket#getall"

  get "/users/:user_id/tickets/", to: "user_tickets#index"
  post "/users/:user_id/tickets/:ticket_id", to: "user_tickets#buy"
  delete "/users/:user_id/tickets/:ticket_id", to: "user_tickets#cancel"

  post "auth/login", to: "authentication#authenticate"
  post "signup", to: "users#create"
end
