class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :airlines, :image_url
  end
end
