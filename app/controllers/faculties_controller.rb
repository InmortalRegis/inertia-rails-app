class FacultiesController < ApplicationController
    def index
        @faculties = Faculty.all
        render inertia: 'Admin/Faculties/Index', props: {
            faculties: @faculties.as_json()
        }
    end

    def new
        render inertia: 'Admin/Faculties/New', props: {}
    end

    def create
        @faculty =  Faculty.new(faculty_params)
        if @faculty.save
          redirect_to admin_faculties_path, notice: 'Faculty created.'
        else
          redirect_to admin_new_faculty_path, inertia: { errors: @faculty.errors }
        end
    end

    private

    def faculty_params
        params.require(:faculty).permit(:name, :code)
    end
end
