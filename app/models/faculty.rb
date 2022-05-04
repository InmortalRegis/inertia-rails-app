class Faculty < ApplicationRecord
    validates :name, :code, presence: true
end
