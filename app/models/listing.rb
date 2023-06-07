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
    require 'open-uri'

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
    validates :max_guests, presence: true

    # before_validation :generate_default_photo
    
    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    has_many :trips,
    foreign_key: :listing_id,
    class_name: :Trip

    has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Review

    has_many_attached :photos

    private

    def generate_default_photo
        unless self.photos.attached?
            # file = URI.open("https://airdnb-dev.s3.us-west-1.amazonaws.com/no-image.jpeg")
            # self.photos.attach(io: file, filename: "no-image.jpeg")

            file = URI.open("https://airdnb-dev.s3.us-west-1.amazonaws.com/default-listing/default1.webp")
            self.photos.attach(io: file, filename: "default1.webp")
            # file2 = URI.open("https://airdnb-dev.s3.us-west-1.amazonaws.com/default-listing/default2.webp")
            # self.photos.attach(io: file2, filename: "default2.webp")
            # file3 = URI.open("https://airdnb-dev.s3.us-west-1.amazonaws.com/default-listing/default3.webp")
            # self.photos.attach(io: file3, filename: "default3.webp")
            # self.photos.attach(io: file4, filename: "default4.webp")
            # self.photos.attach(io: file5, filename: "default5.webp")
        end
    end

    

    


    
end
