class ApplicationController < ActionController::Base
    def index
        render inertia: 'Index', props: {}
    end
end
