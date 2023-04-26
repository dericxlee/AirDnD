export const RECEIVE_LISTINGS = 'listing/RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'listing/RECEIVE_LISTING'
export const REMOVE_LISTING = 'listing/REMOVE_LISTING'

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const getListing = listingId => state => {
    return state?.listings ? state.listings[listingId] : null;
}

export const getListings = state => {
    return state?.listings ? Object.values(state.listings) : [];
}

export const fetchListings = () => async (dispatch) => {
    const res = await fetch (`/api/listings/`)

    if(res.ok) {
        const listings = await res.json()
        dispatch(receiveListings(listings))
    }
}

export const fetchListing = listingId => async (dispatch) => {
    const res = await fetch (`/api/listings/${listingId}`)

    if(res.ok) {
        const listing = await res.json()
        dispatch(receiveListing(listing))
    }
}

export const createListing = listing => async (dispatch) => {
    const res = await fetch (`/api/listings/`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(listing)
    })

    if(res.ok) {
        const listing = await res.json()
        dispatch(receiveListing(listing))
    }
}

export const updateListing = listing => async (dispatch) => {
    const res = await fetch (`/api/listings/${listing.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(listing)
    })

    if(res.ok) {
        const listing = await res.json()
        dispatch(receiveListing(listing))
    }
}

export const deleteListing = listingId => async (dispatch) => {
    const res = await fetch (`/api/listings/${listingId}`, {
        method: 'DELETE',
    })

    if(res.ok){
        dispatch(removeListing(listingId))
    }
}

const listingReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_LISTINGS:
            return {...action.listings};
        case RECEIVE_LISTING:
            return {...state, [action.listing.id]: action.listing};
        case REMOVE_LISTING:
            const newState = {...state};
            delete newState[action.listingId];
            return newState;
        default: 
            return state;
    }
}

export default listingReducer;