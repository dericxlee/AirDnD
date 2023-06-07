json.extract! review, :id, :user_id, :listing_id, :body, :trip_id, :rating

json.user do
    json.first_name review.user.first_name
    json.email review.user.email
    json.photoUrl review.user.photo.url
end

