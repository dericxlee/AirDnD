class ChangeUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string, null:false
    add_column :users, :last_name, :string, null:false
    add_column :users, :birthdate, :date, null:false
    remove_column :users, :username
  end
end
