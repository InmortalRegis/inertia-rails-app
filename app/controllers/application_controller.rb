class ApplicationController < ActionController::Base
    include InertiaCsrf
    include Auth
    # before_action :authenticate_user!
    # inertia_share user: -> {current_user}

end
