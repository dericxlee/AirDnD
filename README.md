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
+ Certain features are only available for logged in users such creating listings.

### Listings
+ Users can create, update, and delete their listings. 
+ Splash page includes an index of available listings for both users and non-users to read.
+ Listings show page include information such as price, property type, and location

### Trips
+ Users can read, create, and delete trips. 
+ Trip are filtered by past trips and upcoming trips. User can only delete upcoming trips. 
+ Users can only see trips that they reserved

```ruby
    def index   
        @trips = Trip.where(user_id: current_user.id)

        render :index
    end
```

+ Frontend trips filtering (will transition to backend filtering)

```javascript
    const today = new Date().toJSON().slice(0, 10);
    
    const futureTrips = trips.filter(trip => trip.closingDate > today)
    const pastTrips = trips.filter(trip => trip.closingDate < today)
```

### Reviews
+ Users can read reviews on specific listing show pages.
+ Users can create reviews on past trips.
+ Users can update and delete their own reviews. 

### Search
+ Users can search by city and/or number of guests.
+ Listings index re-renders on query search. 
+ Search query persists on page refresh.

+ Backend search query
```ruby
    def index
        @listings = Listing.all

        if params[:city].present?
            @listings = @listings.where('LOWER(city) LIKE ?', "%#{params[:city].downcase}%")
        end

        if params[:guests].present?
            guests = params[:guests].to_i
            @listings = @listings.where("max_guests >= ?", guests)
        end

        render :index
    end
```

+ Middleware search
```javascript
    export const fetchListings = (city, guests) => async (dispatch) => {
        const params = new URLSearchParams()
        if(city) params.append('city', city)
        if(guests) params.append('guests', guests)

        const res = await csrfFetch (`/api/listings/?${params.toString()}`);

        if(res.ok) {
            const listings = await res.json()
            dispatch(receiveListings(listings))
        };
    };
```

+ Frontend search query

```javascript
    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if(city) params.append("city", city)
        if(guests) params.append("guests", guests)
        history.push(`/search?${params}`)
        setCity('')
        setGuests('')
    };
```

+ Frontend search results

```javascript
    const params = new URLSearchParams(location.search)
    const city = params.get('city')
    const guests = params.get('guests')

    useEffect(()=> {
        dispatch(fetchListings(city, guests))
    }, [sessionUser, city, guests])
```
