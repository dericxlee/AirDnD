import { useDispatch } from "react-redux"
import React from "react"
import './TripIndexItem.css'

const TripIndexPastItem = ({trip}) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
    }
    
    return (
        <div id='trip-info-container'>
            <div id='trip-info-photo-box'>
                <img id='trip-info-photo' src={trip.listing.photoUrls[0]} alt="photo" />
            </div>
            <div id='trip-info-box'>
                <p className='trip-info'>{trip.listing.city}</p>
                <p className='trip-info'>Hosted by {trip.host.firstName}</p>
                <p className='trip-info'>{trip.startDate}-{trip.closingDate}</p>
                <button className='trip-info' id='create-review-btn' onClick={handleClick}>Write Review</button>
            </div>
        </div>
    )
}

export default TripIndexPastItem;