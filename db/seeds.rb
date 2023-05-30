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

    admin = User.new(
        email: 'admin@test.com',
        password: 'test',
        first_name: 'admin',
        last_name: 'admin',
        birthdate: '1/1/2000'
    )

    curry = User.new(
        email: 'chefcurry@test.com',
        password: 'test',
        first_name: 'Steph',
        last_name: 'Curry',
        birthdate: '1/1/2000'
    )

    curry.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/curry.png'), filename: 'curry.png')

    james = User.new(
        email: 'kingjames@test.com',
        password: 'test',
        first_name: 'Lebron',
        last_name: 'James',
        birthdate: '1/1/1984'
    )

    james.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/lebron.jpeg'), filename: 'lebron.jpeg')

    davis = User.new(
        email: 'thebrow@test.com',
        password: 'test',
        first_name: 'Anthony',
        last_name: 'Davis',
        birthdate: '1/1/2000'
    )

    davis.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/davis.png'), filename: 'davis.png')

    harden = User.new(
        email: 'thebeard@test.com',
        password: 'test',
        first_name: 'James',
        last_name: 'Harden',
        birthdate: '1/1/2000'
    )

    harden.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/beard.png'), filename: 'beard.png')

    durant = User.new(
        email: 'slimreaper@test.com',
        password: 'test',
        first_name: 'Kevin',
        last_name: 'Durant',
        birthdate: '1/1/2000'
    )

    durant.photo.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/kd35.png'), filename: 'kd35.png')

    admin.save!
    curry.save!
    james.save!
    davis.save!
    harden.save!
    durant.save!

    puts 'Users done'
    
    listing_1 = Listing.create!(
        host_id: 2,
        title: "Hollywood Hills Modern Sanctuary, Jaw Dropping View?",
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

    listing_2.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing2/beverly1.webp'), filename: 'beverly1.webp')
    listing_2.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing2/beverly2.webp'), filename: 'beverly2.webp')
    listing_2.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing2/beverly3.webp'), filename: 'beverly3.webp')
    listing_2.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing2/beverly4.webp'), filename: 'beverly4.webp')
    listing_2.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing2/beverly5.webp'), filename: 'beverly5.webp')

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

    listing_3.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing3/petra1.webp'), filename: 'petra1.webp')
    listing_3.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing3/petra2.webp'), filename: 'petra2.webp')
    listing_3.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing3/petra3.webp'), filename: 'petra3.webp')
    listing_3.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing3/petra4.webp'), filename: 'petra4.webp')
    listing_3.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing3/petra5.webp'), filename: 'petra5.webp')

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

    listing_4.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing4/runyon1.webp'), filename: 'runyon1.webp')
    listing_4.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing4/runyon2.webp'), filename: 'runyon2.webp')
    listing_4.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing4/runyon3.webp'), filename: 'runyon3.webp')
    listing_4.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing4/runyon4.webp'), filename: 'runyon4.webp')
    listing_4.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing4/runyon5.webp'), filename: 'runyon5.webp')

    listing_5 = Listing.create!(
        host_id: 4,
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

    listing_5.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing5/pitch1.webp'), filename: 'pitch1.webp')
    listing_5.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing5/pitch2.webp'), filename: 'pitch2.webp')
    listing_5.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing5/pitch3.webp'), filename: 'pitch3.webp')
    listing_5.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing5/pitch4.webp'), filename: 'pitch4.webp')
    listing_5.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing5/pitch5.webp'), filename: 'pitch5.webp')

    listing_6 = Listing.create!(
        host_id: 5,
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

    listing_6.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing6/ranch1.webp'), filename: 'ranch1.webp')
    listing_6.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing6/ranch2.webp'), filename: 'ranch2.webp')
    listing_6.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing6/ranch3.webp'), filename: 'ranch3.webp')
    listing_6.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing6/ranch4.webp'), filename: 'ranch4.webp')
    listing_6.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing6/ranch5.webp'), filename: 'ranch5.webp')

    listing_7 = Listing.create!(
        host_id: 4,
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

    listing_7.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing7/ocean1.webp'), filename: 'ocean1.webp')
    listing_7.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing7/ocean2.webp'), filename: 'ocean2.webp')
    listing_7.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing7/ocean3.webp'), filename: 'ocean3.webp')
    listing_7.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing7/ocean4.webp'), filename: 'ocean4.webp')
    listing_7.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing7/ocean5.webp'), filename: 'ocean5.webp')

    listing_8 = Listing.create!(
        host_id: 6,
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

    listing_8.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing8/yose1.webp'), filename: 'yose1.webp')
    listing_8.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing8/yose2.webp'), filename: 'yose2.webp')
    listing_8.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing8/yose3.webp'), filename: 'yose3.webp')
    listing_8.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing8/yose4.webp'), filename: 'yose4.webp')
    listing_8.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing8/yose5.webp'), filename: 'yose5.webp')

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

    listing_9.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing9/beach1.webp'), filename: 'beach1.webp')
    listing_9.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing9/beach2.webp'), filename: 'beach2.webp')
    listing_9.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing9/beach3.webp'), filename: 'beach3.webp')
    listing_9.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing9/beach4.webp'), filename: 'beach4.webp')
    listing_9.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing9/beach5.webp'), filename: 'beach5.webp')
    
    listing_10 = Listing.create!(
        host_id: 3,
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

    listing_10.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing10/eagle1.webp'), filename: 'eagle1.webp')
    listing_10.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing10/eagle2.webp'), filename: 'eagle2.webp')
    listing_10.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing10/eagle3.webp'), filename: 'eagle3.webp')
    listing_10.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing10/eagle4.webp'), filename: 'eagle4.webp')
    listing_10.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing10/eagle5.webp'), filename: 'eagle5.webp')

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

    listing_11.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing11/grand1.webp'), filename: 'grand1.webp')
    listing_11.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing11/grand2.webp'), filename: 'grand2.webp')
    listing_11.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing11/grand3.webp'), filename: 'grand3.webp')
    listing_11.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing11/grand4.webp'), filename: 'grand4.webp')
    listing_11.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing11/grand5.webp'), filename: 'grand5.webp')

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

    listing_12.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing12/cozy1.webp'), filename: 'cozy1.webp')
    listing_12.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing12/cozy2.webp'), filename: 'cozy2.webp')
    listing_12.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing12/cozy3.webp'), filename: 'cozy3.webp')
    listing_12.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing12/cozy4.webp'), filename: 'cozy4.webp')
    listing_12.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing12/cozy5.webp'), filename: 'cozy5.webp')

    listing_13 = Listing.create!(
        host_id: 2,
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

    listing_13.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing13/palace1.webp'), filename: 'palace1.webp')
    listing_13.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing13/palace2.webp'), filename: 'palace2.webp')
    listing_13.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing13/palace3.webp'), filename: 'palace3.webp')
    listing_13.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing13/palace4.webp'), filename: 'palace4.webp')
    listing_13.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing13/palace5.webp'), filename: 'palace5.webp')

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

    listing_14.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing14/stun1.webp'), filename: 'stun1.webp')
    listing_14.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing14/stun2.webp'), filename: 'stun2.webp')
    listing_14.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing14/stun3.webp'), filename: 'stun3.webp')
    listing_14.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing14/stun4.webp'), filename: 'stun4.webp')
    listing_14.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing14/stun5.webp'), filename: 'stun5.webp')

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

    listing_15.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing15/condo1.webp'), filename: 'condo1.webp')
    listing_15.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing15/condo2.webp'), filename: 'condo2.webp')
    listing_15.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing15/condo3.webp'), filename: 'condo3.webp')
    listing_15.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing15/condo4.webp'), filename: 'condo4.webp')
    listing_15.photos.attach(io: URI.open('https://airdnb-dev.s3.us-west-1.amazonaws.com/listing15/condo5.webp'), filename: 'condo5.webp')

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
        listing_id: 1,
        start_date: '4/4/2023',
        closing_date: '7/4/2023',
        num_guests: 2,
    )

    Trip.create!(
        user_id: 1,
        listing_id: 2,
        start_date: '9/2/2023',
        closing_date: '11/2/2023',
        num_guests: 2,
    )

    Trip.create!(
        user_id: 1,
        listing_id: 4,
        start_date: '1/9/2024',
        closing_date: '6/9/2024',
        num_guests: 2,
    )

    Trip.create!(
        user_id: 1,
        listing_id: 7,
        start_date: '3/7/2024',
        closing_date: '6/7/2024',
        num_guests: 2,
    )

    Trip.create!(
        user_id: 5,
        listing_id: 1,
        start_date: '1/1/2021',
        closing_date: '7/1/2021',
        num_guests: 2
    )

    Trip.create!(
        user_id: 3,
        listing_id: 1,
        start_date: '1/1/2020',
        closing_date: '7/1/2020',
        num_guests: 2
    )

    Trip.create!(
        user_id: 4,
        listing_id: 1,
        start_date: '1/1/2022',
        closing_date: '7/1/2022',
        num_guests: 2
    )

    puts 'all trips done'

    Review.create!(
        user_id: 5,
        listing_id: 1,
        trip_id: 5,
        rating: 5,
        body: 'beautiful house. had a great time staying there for the whole month on new year occasion with the family'
    )

    Review.create!(
        user_id: 3,
        listing_id: 1,
        trip_id: 6,
        rating: 4,
        body: 'Location, location, location. This mansion is all about the proximity to downtown Beverly Hills plus large salt water pool and spa. 
            We enjoyed the beautiful rooms and comfortable beds with the softest sheets. 
            Also noteworthy, the living room is very spacious and comfortable with a large 4k TV. 
            We also enjoyed the patio furniture along with the outdoor BBQ and dining area. 
            This was wonderful for a celebratory dinner.'
    )

    Review.create!(
        user_id: 4,
        listing_id: 1,
        trip_id: 7,
        rating: 1,
        body: 'Perfect location in stunning Beverly Hills. 
            The house was impeccably cleaned and there was plenty of room for all the guests. 
            I left a bag there by accident on check-out day, and the property manager was nice enough to ship it to me. 
            Would stay here again for sure!',
    )

    puts 'Seeding done'

# end