json.listing do
    json.extract! @listing, :id, :host_id, :title, :description
end