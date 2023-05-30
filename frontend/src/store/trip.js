import { useSelector } from "react-redux";
import csrfFetch from "./csrf.js";

export const RECEIVE_TRIPS = 'trips/receiveTrips'
export const RECEIVE_TRIP = 'trips/receiveTrip'
export const REMOVE_TRIP = 'trips/removeTrip'

const receiveTrips = trips => ({
    type: RECEIVE_TRIPS,
    trips
});

const receiveTrip = trip => ({
    type: RECEIVE_TRIP,
    trip
});

const removeTrip = tripId => ({
    type: REMOVE_TRIP,
    tripId
});

export const getTrips = state => {
    // const allTrips = Object.values(state.trips);
    // const sessionUser = state.session.user
    // return state?.trips ? allTrips.filter(trip => trip.userId === 2) : [];

    return state?.trips ? Object.values(state.trips) : [];
};

export const getTrip = (tripId) => state => {
    return state?.trips ? state.trips[tripId] : null;
};

export const fetchTrips = () => async (dispatch) => {
    const res = await csrfFetch (`/api/trips/`)

    if(res.ok) {
        const trips = await res.json()
        dispatch(receiveTrips(trips))
    }
};

export const fetchTrip = tripId => async (dispatch) => {
    const res = await csrfFetch (`/api/trips/${tripId}`)

    if(res.ok){
        const trip = await res.json()
        dispatch(receiveTrip(trip))
    }
};

export const createTrip = trip => async (dispatch) => {
    const {userId, listingId, startDate, closingDate, numGuests} = trip
    const res = await csrfFetch (`/api/trips/`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            listingId,
            startDate,
            closingDate,
            numGuests
        })
    })

    if(res.ok){
        const trip = await res.json()
        dispatch(receiveTrip(trip))
    }
};

export const deleteTrip = tripId => async (dispatch) => {
    const res = await csrfFetch (`/api/trips/${tripId}`, {
        method: 'DELETE',
    });

    if(res.ok){
        dispatch(removeTrip(tripId))
    };
};

const tripsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_TRIPS:
            return {...action.trips};
        case RECEIVE_TRIP:
            return {...state, [action.trip.id] : action.trip};
        case REMOVE_TRIP:
            const newState = {...state};
            delete newState[action.tripId];
            return newState;
        default:
            return state;
    }
}

export default tripsReducer