# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  listing_id :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rating     :integer          not null
#  trip_id    :bigint           not null
#
class Review < ApplicationRecord
    validates :user_id, :listing_id, :body, presence: true
    validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
    validates :trip_id, presence: true, uniqueness: true

    belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :trip,
    foreign_key: :trip_id,
    class_name: :Trip

end
