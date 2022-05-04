class DashboardController < ApplicationController
    def index
        render inertia: 'Admin/Dashboard', props: {}
    end

end
