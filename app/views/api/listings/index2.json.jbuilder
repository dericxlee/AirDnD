@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :host_id, :title, :description, :property_type, :address, :city, :price, :max_guests, :num_baths, :num_beds, :num_bedrooms
    end
end

