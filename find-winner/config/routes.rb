Checklist::Application.routes.draw do
  resources :tasks

  get 'test', to: 'tasks#test'
  root to: 'tasks#index'

end
