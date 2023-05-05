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

    admin = User.create!(
        email: 'admin@test.com',
        password: 'test',
        first_name: 'John',
        last_name: 'Doe',
        birthdate: '1/1/2000'
    )

    curry = User.create!(
        email: 'chefcurry@test.com',
        password: 'test',
        first_name: 'Steph',
        last_name: 'Curry',
        birthdate: '1/1/2000'
    )

    curry.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/curry.png'), filename: 'curry.png')

    james = User.create!(
        email: 'kingjames@test.com',
        password: 'test',
        first_name: 'Lebron',
        last_name: 'James',
        birthdate: '1/1/1984'
    )

    james.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/lebron.jpeg'), filename: 'lebron.jpeg')

    davis = User.create!(
        email: 'thebrow@test.com',
        password: 'test',
        first_name: 'Anthony',
        last_name: 'Davis',
        birthdate: '1/1/2000'
    )

    davis.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/davis.png'), filename: 'davis.png')

    harden = User.create!(
        email: 'thebeard@test.com',
        password: 'test',
        first_name: 'James',
        last_name: 'Harden',
        birthdate: '1/1/2000'
    )

    harden.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/beard.png'), filename: 'beard.png')

    durant = User.create!(
        email: 'slimreaper@test.com',
        password: 'test',
        first_name: 'Kevin',
        last_name: 'Durant',
        birthdate: '1/1/2000'
    )

    durant.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/kd35.png'), filename: 'kd35.png')

    puts 'Users done'
    
    listing_1 = Listing.create!(
        host_id: 2,
        title: 'Hollywood Hills Modern Sanctuary–Jaw Dropping View',
        address: '1 Hollywood Dr',
        city: 'Hollywood',
        property_type: 'Luxury stay',
        price: 1530,
        max_guests: 12,
        num_beds: 8,
        num_bedrooms: 6,
        num_baths: 6,
        description: 'Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary home perfect for 12 guests. 
            Featuring new jetted hot tub, pool table, theater, 5 bedrooms with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 2 car garage + 3 car driveway (parking for 6 on property)
            6th bedroom is in the theatre room (queen bed)
            This house truly defines the essence of the Hollywood Hills. Spectacular-views from downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. 
            The house is decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.',
    )
        
    listing_1.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing1/mansion1.webp'), filename: 'mansion1.webp')
    listing_1.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing1/mansion2.webp'), filename: 'mansion2.webp')
    listing_1.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing1/mansion3.webp'), filename: 'mansion3.webp')
    listing_1.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing1/mansion4.webp'), filename: 'mansion4.webp')
    listing_1.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing1/mansion5.webp'), filename: 'mansion5.webp')

    listing_2 = Listing.create!(
        host_id: 2,
        title: 'Beverly Hills Maison',
        address: '2 Beverly Dr',
        city: 'Beverly Hills',
        property_type: 'Luxury stay',
        price: 2306,
        max_guests: 16,
        num_beds: 10,
        num_bedrooms: 10,
        num_baths: 7,
        description: 'Private, gated French country chateau-inspired home sits at the end of a cul de sac on nearly 2 acres of land and is surrounded by stately trees, mature landscaping, and verdant canyon views. 
            Beautifully living room with fireplace, formal dining room, large kitchen, and light-filled breakfast area. 
            Spectacular canyon views from every room and nearby access to Beverly Hills, and the valley. 
            Expansive backyard and pool area.',
    )

    listing_3 = Listing.create!(
        host_id: 3,
        title: 'Petra Manor',
        address: '3 Petra Dr',
        city: 'Malibu',
        property_type: 'Luxury stay',
        price: 2408,
        max_guests: 8,
        num_beds: 4,
        num_bedrooms: 4,
        num_baths: 3,
        description: "Most villas have a great room, but this manor just north of Malibu Pier has many—even the bedrooms, cinema, and wine cave loom large. 
            Mixing French, Italian, and Spanish design, this is Mediterranean meets Hollywood in high fashion. 
            Linger in the pool with views of stone walls and lawn, play tennis on the private court, and host cocktails at the marble wet bar. 
            You're 1.5 miles from the Pier.",
    )

    listing_4 = Listing.create!(
        host_id: 3,
        title: 'Runyon Canyon Villa',
        address: '4 Runyon Dr',
        city: 'Los Angeles',
        property_type: 'Luxury stay',
        price: 1623,
        max_guests: 6,
        num_beds: 4,
        num_bedrooms: 3,
        num_baths: 3,
        description: 'Exquisite multi level Mediterranean Villa located along legendary Mulholland Drive in the oh so fabulous Hollywood Hills!
            Stunning villa filled with lots of natural light, panoramic city and mountain views from all 4 levels and a resort-like backyard.
            Private gated driveway and 3 car garage provides ample parking - a short walk to Runyon Canyon hiking trails and the famous Hollywood sign!'
    )

    listing_5 = Listing.create!(
        host_id: 1,
        title: 'Pitchouline Estate',
        address: '5 Pitch Dr',
        city: 'Fallbrook',
        property_type: 'Entire home',
        price: 1412,
        max_guests: 7,
        num_beds: 5,
        num_bedrooms: 5,
        num_baths: 3,
        description: "Welcome to Pitchouline Estate. 
            Nestled within 150 acres in Fallbrook & adjoining Temecula city consists of an organic olive farm, vineyard & fruit orchard. 
            This 8,000 sqft residence w/ separate guest house offers a perfect blend of space, privacy & luxury. 
            Guests will be delighted by the views, pool, hot tub, lake fishing, amenities & expansive trails along the creek & groves. 
            Conveniently located 10 miles from Temecula wine country & 25 miles to the beach. 
            It is the perfect family luxury retreat"
    )

    listing_6 = Listing.create!(
        host_id: 1,
        title: 'The Ranch Almaden',
        address: '6 Ranch Dr',
        city: 'San Jose',
        property_type: 'Entire home',
        price: 1650,
        max_guests: 5,
        num_beds: 3,
        num_bedrooms: 3,
        num_baths: 2,
        description: "With 10,000 square feet of luxurious living The Villa has it all. 
            There are 6 oversized bedrooms, 7 spa like baths, movie theater, gym, commercial bar and a chef's kitchen. 
            The exterior has a full kitchen with BBQ and a pizza oven. 
            Large pool with waterfall and bocce court nearby.",
    )

    listing_7 = Listing.create!(
        host_id: 1,
        title: 'Relaxing Oceanfront Home just Minutes to Beaches',
        address: '7 Ocean Dr',
        city: 'Santa Cruz',
        property_type: 'Entire home',
        price: 1908,
        max_guests: 5,
        num_beds: 3,
        num_bedrooms: 3,
        num_baths: 2,
        description: 'Located between the famous Pleasure Point and Capitola Village, you will find yourself waking up to a breathtaking view of the Pacific Ocean. 
            The pristine backyard is perfect for sunbathing, lawn games, or enjoying lunch on the patio. 
            Included is an entry key to a private beach just steps away at Privates Beach where only the locals go to surf and soak up the sun- clothing optional. 
            This spacious home is the perfect family getaway.',
    )

    listing_8 = Listing.create!(
        host_id: 1,
        title: 'The Great Yosemite Retreat',
        address: '8 Yosemite Dr',
        city: 'Mariposa',
        property_type: 'Entire home',
        price: 1908,
        max_guests: 5,
        num_beds: 3,
        num_bedrooms: 3,
        num_baths: 2,
        description: 'Enjoy a luxurious getaway in this stunning 3 BR, 2 Bath home with breathtaking mountain views! 
            This unique property features a private pool and lovely outdoor space. 
            Enjoy endless hours of entertainment in the spacious living room, or take a few laps in the pool while taking in the magnificent mountain view. 
            A fully-equipped kitchen and cozy bedrooms offer plenty of comfort and convenience, while access to hiking trails nearby ensures you can explore your surroundings at will.'
    )

    listing_9 = Listing.create!(
        host_id: 1,
        title: 'Ocean Beach View Paradise',
        address: '9 Beach Dr',
        city: 'Pacifica',
        property_type: 'Entire home',
        price: 800,
        max_guests: 10,
        num_beds: 6,
        num_bedrooms: 5,
        num_baths: 4,
        description: "Need a place to reset, relax, or work remotely? 
            This is the place. Situated in charming Pedro Point (above Linda Mar beach), this 4BR/3BA home has views from every room. 
            Our 3 decks are perfect places to enjoy your morning coffee, work on your perfect yoga pose, or finish that NYT crossword. 
            But if you love working (that's OK too). With fast wifi throughout, this home is a perfect place to work remotely, write your great American novel or host Zooms."
    )

    listing_10 = Listing.create!(
        host_id: 1,
        title: "EAGLE'S WATCH MALIBU",
        address: '10 Eagle Dr',
        city: 'Malibu',
        property_type: 'Entire home',
        price: 1015,
        max_guests: 8,
        num_beds: 3,
        num_bedrooms: 3,
        num_baths: 3,
        description: "Eagle's Watch is one of Malibu's most famous houses, impossible to miss while driving the Pacific Coast Highway and designed by legendary architect Harry Gesner. 
            Perched above the Pacific Ocean, Eagle’s Watch has the best unobstructed panoramic view in Malibu. 
            Perfect for entertaining with dramatic outdoor and indoor spaces, the views from every location are simply stunning. 
            Stay in ultimate luxury in this one of a kind serene modern marvel."
    )

    listing_11 = Listing.create!(
        host_id: 3,
        title: "Trousdale Grand",
        address: '11 Grand Dr',
        city: 'Los Angeles',
        property_type: 'Luxury stay',
        price: 3500,
        max_guests: 14,
        num_beds: 8,
        num_bedrooms: 8,
        num_baths: 7,
        description: 'Panoramic views stretch from downtown Los Angeles to Catalina Island at this ultra-luxurious estate in Beverly Hills. 
        Floor-to-ceiling glass invites the incredible vista inside, while multiple lounge areas on the terrace create even more living space for your large group. 
        After a relaxing day by the pool, venture down to Santa Monica for a beachfront dinner and a moonlit selfie on the pier.'
    )

    listing_12 = Listing.create!(
        host_id: 1,
        title: "Cozy One Bedroom",
        address: '12 Cozy Dr',
        city: 'Oakland',
        property_type: 'Private room',
        price: 204,
        max_guests: 2,
        num_beds: 1,
        num_bedrooms: 1,
        num_baths: 1,
        description: "Experience comfort and style in our modern in-law unit with an open kitchen and living space with a mid-century modern esthetic. 
            Conveniently located in the unit are a washer and dryer. Have a peaceful sleep on the queen-sized bed with cooling pillows and breathable sheets in the bedroom. 
            Both the living area and bedroom have televisions, and recessed lighting throughout. 
            This unit is on the ground floor of a single-family home in an Oakland neighborhood."
    )

    listing_13 = Listing.create!(
        host_id: 4,
        title: "The Palace",
        address: '13 King Dr',
        city: 'Los Angeles',
        property_type: 'Luxury stay',
        price: 2654,
        max_guests: 10,
        num_beds: 7,
        num_bedrooms: 6,
        num_baths: 5,
        description: "A regal Beverly Hills Palace awaits you in the heart of Beverly Hills' Estates Section. 
            This 20,000 square foot palace has all the appointments fit for a king. 
            The craftsmanship and materials are the finest. Some of the appointments include a 50 ft heated pool, jacuzzi, surround sounds systems, fireplaces, high ceilings and wall of glass. 
            Dramatic entry and huge living room overlook enormous deep grounds with cabana ste, bbq center, spa. 
            This magnificent property is truly a baroque masterpiece."
    )

    listing_14 = Listing.create!(
        host_id: 1,
        title: "Stunning San Francisco views",
        address: '14 Stun Dr',
        city: 'San Francisco',
        property_type: 'Entire home',
        price: 899,
        max_guests: 10,
        num_beds: 6,
        num_bedrooms: 4,
        num_baths: 3,
        description: "Just 14 miles across the Golden Gate Bridge lies the ultimate Bay Area getaway! 
            Bring your family and friends to enjoy the vast sweeping views of the bay, including both Bay and Golden Gate Bridges. 
            Enjoy this epic scenery from the terrace or taking a splash in the pool or treat yourself to the ultimate writers retreat and soak in the peaceful and quiet atmosphere. 
            Only 1.5 miles to the Angel Island Ferry, take a day trip to beautiful Angel Island or explore all that Tiburon has to offer. 
            Great location for hiking, biking, close proximity to Muir Woods and Mt. Tamalpais- something for everyone! 
            This incredibly special place will give you memories for a lifetime."
    )

    listing_15 = Listing.create!(
        host_id: 5,
        title: "Oceanfront Condo",
        address: '15 Condo Dr',
        city: 'Watsonville',
        property_type: 'Entire home',
        price: 1155,
        max_guests: 6,
        num_beds: 3,
        num_bedrooms: 2,
        num_baths: 2,
        description: "Large 2 bedroom 2-bath beach condo is perfect for a family visit to the beach. 
            All the comforts of home while on vacation, fully stocked kitchen for meals and views of the ocean from the living room. 
            Enjoy a book by the window or a short walk to the beach. Plenty of room for the whole family to relax and sleep peacefully. 
            The white sand beach is just a 5-minute walk from the front door and the natural habitat of the dunes bordering the shoreline. 
            Let the pictures convince you that this is the condo for your next vacation. 
            Spanning 1.5 miles of pristine beach, Pajaro Dunes Resort is a secluded, gated community featuring a collection of beautiful beachfront homes, townhouses, and condos. 
            This Shorebird unit includes free parking."
    )




    # 20.times do 
    #     Listing.create!({
    #         host_id: rand(2..6),
    #         title: 'Great listing',
    #         description: 'Long dummy description here',
    #         address: '123 Random Address',
    #         city: ['San Francisco', 'San Jose', 'Los Angeles', 'San Diego'].sample,
    #         property_type: ['Entire home', 'Private room', 'Luxury stay'].sample,
    #         price: rand(100..2000),
    #         max_guests: rand(1..10),
    #         num_beds: rand(1..10),
    #         num_bedrooms: rand(1..10),
    #         num_baths: rand(1..10)
    #     }) 
    # end

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