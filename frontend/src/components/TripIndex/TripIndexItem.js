import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import './TripIndexItem.css'
import { deleteTrip } from "../../store/trip"

const TripIndexItem = ({trip, id}) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(deleteTrip(trip.id))
    }

    return (
        <>
            <li id='trip-info-box'>
                <img id='trip-info-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="photo" />
                <p>{trip.listing.city}</p>
                <p>Hosted by {trip.host.firstName}</p>
                <p>{trip.startDate}</p>
                <p>{trip.closingDate}</p>
                <button onClick={handleClick}>Cancel Trip</button>
            </li>
        </>
    )
}

export default TripIndexItem;