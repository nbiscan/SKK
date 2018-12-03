Rails.application.routes.draw do
  resources :carriers do
    resources :tickets
  end
  resources :users

  get "tickets", to: "ticket#getall"

  # get "/users/:user_id/tickets/", to: "tickets#get_tickets"
  # delete "/users/:user_id/tickets/", to: "ticket#delete_ticket"

  post "auth/login", to: "authentication#authenticate"
  post "signup", to: "users#create"
end
