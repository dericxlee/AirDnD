# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    Listing.destroy_all
    User.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('listings')
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

    Listing.create!(
        host_id: 1,
        title: 'Small House',
        description: 'Affordable',
        address: '456 Webster Street',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 150,
        max_guests: 4,
        num_beds: 2,
        num_bedrooms: 2,
        num_baths: 2
    )

    Listing.create!(
        host_id: 1,
        title: 'Vacation Home',
        description: 'Great beach view, swimming pool',
        address: '123 Beachfront Ave',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 500,
        max_guests: 8,
        num_beds: 5,
        num_bedrooms: 4,
        num_baths: 4
    )

    Listing.create!(
        host_id: 1,
        title: 'Cabin',
        description: 'In the forest',
        address: '123 Forest Ave',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 200,
        max_guests: 3,
        num_beds: 2,
        num_bedrooms: 2,
        num_baths: 2
    )

    20.times do 
        Listing.create!({
            host_id: 1,
            title: 'Dummy Title',
            description: 'Fake Description',
            address: '123 Fake Avenue',
            city: 'San Francisco',
            property_type: 'Entire home',
            price: rand(1000),
            max_guests: rand(10),
            num_beds: rand(10),
            num_bedrooms: rand(10),
            num_baths: rand(10)
        }) 
    end

    puts 'Seeding done'

end