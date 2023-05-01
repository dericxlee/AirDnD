class CorrectTripTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :trips, :end_date
    add_column :trips, :closing_date, :date, null:false
  end
end
