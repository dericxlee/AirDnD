class ModifyReviewTable < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :rating, :integer, null:false
    change_column :reviews, :trip_id, :bigint, null:false
  end
end
