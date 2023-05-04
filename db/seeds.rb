# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

# ApplicationRecord.transaction do
    Review.destroy_all
    Trip.destroy_all
    Listing.destroy_all
    User.destroy_all


    puts 'destroyed all'

    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    ApplicationRecord.connection.reset_pk_sequence!('trips')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts 'reset id'

    User.create!(
        email: 'admin@test.com',
        password: 'test',
        first_name: 'John',
        last_name: 'Doe',
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
        birthdate: '1/1/1984'
    )

    User.create!(
        email: 'thebrow@test.com',
        password: 'test',
        first_name: 'Anthony',
        last_name: 'Davis',
        birthdate: '1/1/2000'
    )

    User.create!(
        email: 'thebeard@test.com',
        password: 'test',
        first_name: 'James',
        last_name: 'Harden',
        birthdate: '1/1/2000'
    )

    User.create!(
        email: 'slimreaper@test.com',
        password: 'test',
        first_name: 'Kevin',
        last_name: 'Durant',
        birthdate: '1/1/2000'
    )

    puts 'Users done'

    # mansion1 = File.open('app/assets/images/mansion1.jpeg')
    # mansion2 = File.open('app/assets/images/mansion1.jpeg')
    
    mansion = Listing.create!(
        host_id: 2,
        title: 'Modern Mansion',
        address: '30 Paradise Drive',
        city: 'Malibu',
        property_type: 'Luxury stay',
        price: 1530,
        max_guests: 12,
        num_beds: 8,
        num_bedrooms: 6,
        num_baths: 6,
        description: 'This gorgeous Malibu estate is designed to dazzle. 
        This stunning property, which features a private soccer field, tennis court, and luxury pool and spa, is the perfect place for both relaxation and recreation. Perfect for the family!',
    )
        
    mansion.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/107167782-1671217197698-11870ElliceStreet102.jpeg'), 
        filename: '107167782-1671217197698-11870ElliceStreet102.jpeg')
    # mansion.photos.attach(io: mansion1, filename: 'mansion1.jpeg')

    Listing.create!(
        host_id: 3,
        title: 'The Coachella Estate',
        address: '6 Coachella Drive',
        city: 'Indio',
        property_type: 'Luxury stay',
        price: 2306,
        max_guests: 16,
        num_beds: 10,
        num_bedrooms: 10,
        num_baths: 7,
        description: 'The mansion itself boast 10 bedrooms with 7 recently remodeled full bathrooms spread throughout the residence. 
            If you are looking to host an unforgettable meal, the chef’s kitchen and dining area will surely help make memories with your group in mind. Outdoor dining tables and bar area are great for gathering.',
    )

    Listing.create!(
        host_id: 3,
        title: 'Suburban ',
        address: '23 Villa Drive',
        city: 'Beverly Hills',
        property_type: 'Entire villa',
        price: 2408,
        max_guests: 8,
        num_beds: 4,
        num_bedrooms: 4,
        num_baths: 3,
        description: 'Luxurious and private Double gated modern/contemporary
            Resort Villa in Beverly Hills almost 8,200 Sqf of living space on expansive and lush nearly
            Acre Lot with Gardens and Basketball Court.',
    )

    Listing.create!(
        host_id: 3,
        title: 'Magical Santa Monica Views',
        address: '6 Heat Drive',
        city: 'Santa Monica',
        property_type: 'Entire condo',
        price: 623,
        max_guests: 2,
        num_beds: 1,
        num_bedrooms: 1,
        num_baths: 1,
        description: 'Entire luxury condo at Quadro in the Miami Design District. 
            Fully furnished & equipped - Free parking, coffee, Wi-Fi & cable. 
            The building features resort-style amenities in the 6th floor including a fitness center with a yoga/spinning studio, a lounge with co-working/conference areas & a game room.',
    )

    Listing.create!(
        host_id: 1,
        title: 'Affordable single home',
        address: '123 Main Street',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 415,
        max_guests: 4,
        num_beds: 2,
        num_bedrooms: 2,
        num_baths: 1,
        description: 'No better deal than this. Great downtown view.',
    )

    Listing.create!(
        host_id: 1,
        title: 'Affordable single home',
        address: '456 Main Street',
        city: 'Daly City',
        property_type: 'Entire home',
        price: 650,
        max_guests: 5,
        num_beds: 3,
        num_bedrooms: 2,
        num_baths: 2,
        description: 'Close to grocery stores, restaurants, shopping mall',
    )

    Listing.create!(
        host_id: 1,
        title: 'Affordable single home',
        address: '123 Main Street',
        city: 'San Jose',
        property_type: 'Entire home',
        price: 408,
        max_guests: 4,
        num_beds: 2,
        num_bedrooms: 2,
        num_baths: 1,
        description: 'Close to airport. Affordable with amenities.'
    )

    20.times do 
        Listing.create!({
            host_id: rand(2..6),
            title: 'Great listing',
            description: 'Long dummy description here',
            address: '123 Random Address',
            city: ['San Francisco', 'San Jose', 'Los Angeles', 'San Diego'].sample,
            property_type: ['Entire home', 'Private room', 'Luxury stay'].sample,
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
        listing_id: 2,
        start_date: '4/5/2023',
        closing_date: '4/9/2023',
        num_guests: 2,
    )

    Trip.create!(
        user_id: 1,
        listing_id: 3,
        start_date: '4/2/2023',
        closing_date: '4/9/2023',
        num_guests: 2,
    )

    puts 'first trips done'

    Trip.create!(
        user_id: 1,
        listing_id: 1,
        start_date: '1/1/2024',
        closing_date: '1/9/2024',
        num_guests: 1,
    )

    Trip.create!(
        user_id: 1,
        listing_id: 4,
        start_date: '3/1/2024',
        closing_date: '3/9/2024',
        num_guests: 2,
    )

    puts 'all trips done'

    Review.create!(
        user_id: 1,
        listing_id: 1,
        body: 'nice place'
    )

    Review.create!(
        user_id: 2,
        listing_id: 1,
        body: 'great hose'
    )

    Review.create!(
        user_id: 4,
        listing_id: 1,
        body: 'fantastic stay'
    )

    # Trip.create!(
    #     user_id: 1,
    #     listing_id: 8,
    #     start_date: '1/1/2024',
    #     closing_date: '1/9/2024',
    # )

    # test_trip = Trip.create!(
    #     user_id: 1,
    #     listing_id: 8,
    #     start_date: '01/11/2024',
    #     closing_date: '10/11/2024',
    #     num_guests: 1
    # );

    # file = File.open('app/assets/images/mansion1.jpeg')

    # test_trip.photo.attach(io: file, filename: 'mansion1.jpeg')

    puts 'Seeding done'

# end