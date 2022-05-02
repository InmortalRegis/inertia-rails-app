class Dashboard::HomeController < ApplicationController
    def index
        render inertia: 'Index', props: {}
    end
end
