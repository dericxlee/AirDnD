json.extract! trip, :id, :user_id, :listing_id, :start_date, :closing_date, :num_guests

json.user do
    json.first_name trip.user.first_name
    json.last_name trip.user.last_name
    json.email trip.user.email
end

json.host do 
    json.first_name trip.host.first_name
    json.last_name trip.host.last_name
    json.email trip.host.email
end

json.listing do
    json.city trip.listing.city
    json.price trip.listing.price
    json.photoUrls trip.listing.photos.map {|file| file.url}
    json.title trip.listing.title
    json.id trip.listing.id
end

if trip.review.nil?
    json.review nil
else
    json.review do
        json.id trip.review.id
        json.body trip.review.body
        json.rating trip.review.rating
    end
end
