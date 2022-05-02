class DashboardController < ApplicationController
    def index
        render inertia: 'Dashboard', props: {}
    end
    
end
