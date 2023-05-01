# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do
    Trip.destroy_all
    Listing.destroy_all
    User.destroy_all

    puts 'destroyed all'

    ApplicationRecord.connection.reset_pk_sequence!('trips')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts 'reset id'

    User.create!(
        email: 'admin@test.com',
        password: 'test',
        first_name: 'admin',
        last_name: 'admin',
        birthdate: '1/1/2000'
    )

    User.create!(
        email: 'chefcurry@test.com',
        password: 'test',
        first_name: 'Steph',
        last_name: 'Curry',
        birthdate: '1/1/2000'
    )

    User.create!(
        email: 'kingjames@test.com',
        password: 'test',
        first_name: 'Lebron',
        last_name: 'James',
        birthdate: '1/1/2000'
    )

    User.create!(
        email: 'thebrow@test.com',
        password: 'test',
        first_name: 'Anthony',
        last_name: 'Davis',
        birthdate: '1/1/2000'
    )

    puts 'Users done'

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
            host_id: rand(1..3),
            title: 'Short Dummy Title',
            description: 'Long dummy description here',
            address: '123 Address',
            city: ['San Francisco', 'San Jose', 'Los Angeles'].sample,
            property_type: ['Entire home', 'Private room'].sample,
            price: rand(100..2000),
            max_guests: rand(1..10),
            num_beds: rand(1..10),
            num_bedrooms: rand(1..10),
            num_baths: rand(1..10)
        }) 
    end

    puts 'Listings done'

    Trip.create!(
        user_id: 1,
        listing_id: 5,
        start_date: '1/1/2024',
        closing_date: '1/9/2024',
    )

    Trip.create!(
        user_id: 1,
        listing_id: 6,
        start_date: '1/1/2024',
        closing_date: '1/9/2024',
    )

    # Trip.create!(
    #     user_id: 1,
    #     listing_id: 7,
    #     start_date: '1/1/2024',
    #     closing_date: '1/9/2024',
    # )

    # Trip.create!(
    #     user_id: 1,
    #     listing_id: 8,
    #     start_date: '1/1/2024',
    #     closing_date: '1/9/2024',
    # )

    # test_trip2 = Trip.create!(
    #     user_id: 1,
    #     listing_id: 8,
    #     start_date: '01/06/2024',
    #     closing_date: '01/10/2024',
    # )

    puts 'Seeding done'

end