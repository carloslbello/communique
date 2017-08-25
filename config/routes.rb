Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, format: { default: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show] do
      resources :comments, only: [:create, :index]
    end
  end

  root 'static_pages#root'
end
