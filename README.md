# Airdnd

[Live Site](https://airdnb.herokuapp.com/)

Airdnd, a clone of Airbnb, is a platform that allows users to browse, book, and host homestay locations for traveling. 

## Technologies Used
Airdnd was built with:
+ Ruby on rails
+ PostgreSQL
+ React
+ Redux
+ AWS S3

## Features


### User Auth
+ Users can signup, login, and logout of an account. 
+ Certain features are only available for logged in users such creating listings

### Listings
+ Users can create, update, and delete their listings. 
+ Splash page includes an index of available listings for both users and non-users to read.
+ Listings on index are filtered upon logging in to prevent seeing current user's listings.
+ Listings show page include information such as price, property type, and location

### Trips
+ Users can read, create, and delete trips. 
+ Trip are filtered by past trips and upcoming trips. User can only delete upcoming trips. 

### Reviews
+ Users can read reviews on specific listing show pages. 
