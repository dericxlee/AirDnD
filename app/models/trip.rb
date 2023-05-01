# == Schema Information
#
# Table name: trips
#
#  id           :bigint           not null, primary key
#  user_id      :bigint           not null
#  listing_id   :bigint           not null
#  start_date   :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  closing_date :date             not null
#
class Trip < ApplicationRecord
    validates :user_id, presence: true
    validates :listing_id, presence: true
    validates :start_date, presence: true, comparison: {less_than: :closing_date}
    validates :closing_date, presence: true, comparison: {greater_than: :start_date}

    validate :no_overlapping_trip
    
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

    has_one :host,
    through: :listing,
    source: :host

    def period
        start_date..closing_date
    end

    private

    def no_overlapping_trip
        overlapping_trip = Trip
            .where(listing_id: listing_id)
            .where(start_date: ..closing_date, closing_date: start_date..)
            .where.not(id: id)
            .exists?
        errors.add(:base, 'Trip cannot overlap existing trips') if overlapping_trip
    end

end
