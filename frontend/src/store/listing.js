import csrfFetch from "./csrf.js";

// export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'
export const RECEIVE_LISTINGS = 'listings/receiveListings'
export const RECEIVE_LISTING = 'listings/receiveListing'
export const REMOVE_LISTING = 'listings/removeListing'
// export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING'
// export const REMOVE_LISTING = 'listings/REMOVE_LISTING'

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});


export const getListings = state => {
    return state?.listings ? Object.values(state.listings) : [];
};

export const getListing = (listingId) => state => {
    return state?.listings ? state.listings[listingId] : null;
};

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

export const manageListings = () => async (dispatch) => {
    const res = await csrfFetch (`/api/listings/manage`);

    if(res.ok){
        const listings = await res.json();
        dispatch(receiveListings(listings))
    };
};

export const fetchListing = listingId => async (dispatch) => {
    const res = await csrfFetch (`/api/listings/${listingId}`);
    // const data = await res.json()

    if(res.ok) {
        const listing = await res.json()
        // console.log(listing, 'fetch')
        dispatch(receiveListing(listing))
    }
}

export const createListing = listing => async (dispatch) => {
    const { hostId, title, description, propertyType, price, address, city, maxGuests, numBeds, numBedrooms, numBaths} = listing
    const res = await csrfFetch (`/api/listings/`, {
        method: 'POST',
        body: JSON.stringify({
            hostId,
            title,
            description,
            propertyType,
            price,
            address,
            city,
            maxGuests,
            numBeds,
            numBedrooms,
            numBaths
        })
    })

    if(res.ok) {
        const listing = await res.json()
        dispatch(receiveListing(listing))
    }
}

export const updateListing = listing => async (dispatch) => {
    const res = await csrfFetch (`/api/listings/${listing.id}`, {
        method: 'PATCH',
        body: JSON.stringify(listing)
    })

    if(res.ok) {
        const listing = await res.json()
        dispatch(receiveListing(listing))
    }
}

export const deleteListing = listingId => async (dispatch) => {
    const res = await csrfFetch (`/api/listings/${listingId}`, {
        method: 'DELETE',
    })

    if(res.ok){
        dispatch(removeListing(listingId))
    }
}

const listingsReducer = (state = {}, action) => {
    // let newState
    switch(action.type){
        case RECEIVE_LISTINGS:
            // newState = {...state}
            // action.listings.forEach((listing)=>{
            //     newState[listing.id] = listing;
            // })
            // // return action.listings
            // return newState;
            return {...action.listings};
        case RECEIVE_LISTING:
            // return action.listing.id
            // return {...state, [action.listing.id]: action.listing};
            // console.log(action.listing.id, 'test')
            // console.log(action)
            // console.log([action.listing.id])
            return {...state, [action.listing.id] : action.listing};
            // return action.listing
        case REMOVE_LISTING:
            const newState = {...state};
            delete newState[action.listingId];
            return newState;
        default: 
            return state;
    }
}

export default listingsReducer;