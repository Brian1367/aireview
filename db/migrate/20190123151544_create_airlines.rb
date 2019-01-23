class CreateAirlines < ActiveRecord::Migration[5.2]
  def change
    create_table :airlines do |t|
      t.string :name, null: false
      t.string :destinations, null: false
      t.integer :overall_rating, null:false

      t.timestamps null: false

    end
  end
end
