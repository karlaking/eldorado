class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :point_num
      t.integer :elevation
      t.string :datetime
      t.text :description
      t.float :longitude
      t.float :latitude

      t.timestamps null: false
    end
  end
end
