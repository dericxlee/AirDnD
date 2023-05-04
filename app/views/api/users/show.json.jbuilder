json.user do
  json.extract! @user, :id, :email, :created_at, :updated_at, :first_name, :last_name, :birthdate
  json.photoUrl @user.photo.url
end