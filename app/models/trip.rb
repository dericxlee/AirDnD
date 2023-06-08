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
#  num_guests   :integer          not null
#
class Trip < ApplicationRecord
    validates :user_id, presence: true
    validates :listing_id, presence: true
    validates :start_date, presence: true, comparison: {less_than: :closing_date}
    validates :closing_date, presence: true, comparison: {greater_than: :start_date}
    validates :num_guests, numericality: {greater_than: 0}, comparison: {less_than_or_equal_to: :max_guests}

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

    has_one :review,
    foreign_key: :trip_id,
    class_name: :Review

    has_one_attached :photo

    def period
        start_date..closing_date
    end

    def today
        Date.today
    end

    def max_guests
        self.listing.max_guests
    end

    private

    def no_overlapping_trip
        overlapping_trip = Trip
            .where(listing_id: listing_id)
            .where(start_date: ..closing_date, closing_date: start_date..)
            .where.not(id: id)
            .exists?
        errors.add(:base, 'Reservation cannot overlap existing trips') if overlapping_trip
    end

end
