json.extract! listing, :id, :host_id, :title, :description, :property_type, :address, :city, :price, :max_guests, :num_baths, :num_beds, :num_bedrooms

json.host do
    json.first_name listing.host.first_name
    json.last_name listing.host.last_name
    json.email listing.host.email
end