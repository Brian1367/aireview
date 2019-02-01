class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :description, null: false
      t.integer :price_rating, null: false
      t.integer :service_rating, null: false
      t.integer :reliability_rating, null: false
      t.integer :overall_rating, null: false
      t.belongs_to :airline, null: false
      t.belongs_to :user, null: false
      t.timestamps null: false
    end
  end
end
