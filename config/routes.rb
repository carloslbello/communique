Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, format: { default: :json } do
    resources :users, only: [:create, :show, :update] do
      resource :follow, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :update] do
      resources :comments, only: [:create, :index]
    end
  end

  root 'static_pages#root'
end
