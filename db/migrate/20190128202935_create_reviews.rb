class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user, null: false
      t.text :description, null: false
      t.integer :price_rating, null: false
      t.integer :service_rating, null: false
      t.integer :reliability_rating, null: false
      t.integer :overall_rating, null: false
      t.belongs_to :airline

      t.timestamps null: false
    end
  end
end
