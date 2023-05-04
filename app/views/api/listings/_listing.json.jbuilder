json.extract! listing, :id, :host_id, :title, :description, :property_type, :address, :city, :price, :max_guests, :num_baths, :num_beds, :num_bedrooms
json.photoUrls listing.photos.map { |file| file.url}

json.reviews listing.reviews.each do |review|
    json.partial! 'api/reviews/review', review: review
end
    
json.host do
    json.first_name listing.host.first_name
    json.last_name listing.host.last_name
    json.email listing.host.email
end