# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  host_id       :bigint           not null
#  title         :string           not null
#  description   :string           not null
#  address       :string           not null
#  city          :string           not null
#  property_type :string           not null
#  price         :integer          not null
#  max_guests    :integer          not null
#  num_beds      :integer          not null
#  num_bedrooms  :integer          not null
#  num_baths     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Listing < ApplicationRecord
    validates :host_id, presence: true
    validates :title, presence: true
    validates :description, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :property_type, presence: true
    validates :price, presence: true
    validates :num_beds, presence: true
    validates :num_bedrooms, presence: true
    validates :num_baths, presence: true
    
    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end
