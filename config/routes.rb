Rails.application.routes.draw do

  root to: 'staticpages#root'

  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end

end
