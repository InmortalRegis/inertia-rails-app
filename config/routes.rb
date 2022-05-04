Rails.application.routes.draw do
  devise_for :users, skip: %i[sessions passwords registrations]
  as :user do
    get 'login', to: 'users/sessions#new', as: :new_user_session
    post 'login', to: 'users/sessions#create', as: :user_session
    match 'logout', to: 'users/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'home#index'
  # get '/dashboard' => 'home#index', as: :dashboard
  # namespace "dashboard" do
  #   root to: "home#index", as: :home
  # end
  scope :admin do
    get '/', to: redirect('/dashboard')
    get '/dashboard' => "dashboard#index", as: :admin_dashboard
    get '/faculties' => 'faculties#index', as: :admin_faculties
    get '/faculties/new' => 'faculties#new', as: :admin_new_faculty
    post  '/faculties/create' => 'faculties#create', as: :admin_create_faculty
  end
end
