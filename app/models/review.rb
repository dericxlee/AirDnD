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
#
class Review < ApplicationRecord
    validates :user_id, :listing_id, :body, presence: true
    validates :user_id, uniqueness: {scope: :listing_id}

    belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
