class AddGuestToTripTable < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :num_guests, :integer, null:false
  end
end
