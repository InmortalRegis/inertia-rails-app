class ApplicationController < ActionController::Base
  include Auth
  include InertiaCsrf
  include InertiaFlash
  include InertiaJson

  inertia_share auth: -> {
    {
      user: current_user.as_json(
        only: [ :id, :first_name, :last_name ],
      )
    }
  }
  def after_sign_in_path_for(resource)
    dashboard_home_path
  end
end
