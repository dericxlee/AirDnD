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
        <div id='trip-info-container'>
            <div id='trip-info-photo-box'>
                <img id='trip-info-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="photo" />
            </div>
            <div id='trip-info-box'>
                <p className='bold-header'>{trip.listing.city}</p>
                <p id='trip-info'>Hosted by {trip.host.firstName}</p>
                <p id='trip-info'>{trip.startDate}</p>
                <p id='trip-info'>{trip.closingDate}</p>
                <button onClick={handleClick}>Cancel Trip</button>
            </div>
        </div>
    )
}

export default TripIndexItem;