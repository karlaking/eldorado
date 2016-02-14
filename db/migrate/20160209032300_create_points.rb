class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :point_num
      t.string :elevation
      t.string :datetime
      t.text :description
      t.text :img_url
      t.float :longitude
      t.float :latitude

      t.timestamps null: false
    end
  end
end
