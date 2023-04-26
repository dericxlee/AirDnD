# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    User.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('users')

    User.create!(
        email: 'admin@test.com',
        password: 'test',
        first_name: 'admin',
        last_name: 'admin',
        birthdate: '1/1/2000'
    )

    Listing.create!(
        host_id: 1,
        title: 'Big Mansion',
        description: 'Nice view and place',
        address: '123 Main Street',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 500,
        max_guests: 10,
        num_beds: 6,
        num_bedrooms: 5,
        num_baths: 4
    )

end