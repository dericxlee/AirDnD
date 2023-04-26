class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :host, null:false, foreign_key: {to_table: :users}
      t.string :title, null:false
      t.string :description, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.string :property_type, null:false
      t.integer :price, null:false
      t.integer :max_guests, null:false
      t.integer :num_beds, null:false
      t.integer :num_bedrooms, null:false
      t.integer :num_baths, null:false
      t.timestamps
    end
  end
end
