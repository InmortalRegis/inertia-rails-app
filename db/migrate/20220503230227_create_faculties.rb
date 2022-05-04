class CreateFaculties < ActiveRecord::Migration[7.0]
  def change
    create_table :faculties do |t|
      t.string :name
      t.string :code
      t.integer :updated_by
      t.integer :created_by

      t.timestamps
    end
    add_index :faculties, :updated_by
    add_index :faculties, :created_by
  end
end
