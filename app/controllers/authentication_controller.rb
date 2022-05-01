class AuthenticationController < ApplicationController
    def login
        render inertia: 'Login', props: {}
    end
end
