Journal::Application.routes.draw do

  root :to => "posts#home"

  resources :posts
end
