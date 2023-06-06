import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import './TripIndexItem.css'
import { deleteTrip } from "../../store/trip"
import ReviewFormModal from "../ReviewFormModal"

const TripIndexItem = ({trip, key, today, update, setUpdate}) => {
    const dispatch = useDispatch()

    const tripStartDate = trip.startDate;
    const tripEndDate = trip.closingDate;

    const startDate = new Date(tripStartDate)
    const endDate = new Date(tripEndDate)

    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();

    const options = { month: "short", day: "2-digit", year: "numeric" };

    let formattedStartDate = startDate.toLocaleDateString("en-US", options);
    let formattedEndDate = endDate.toLocaleDateString("en-US", options);

    if(startYear !== endYear){
        return;
    } else if (startMonth !== endMonth){
        formattedStartDate = formattedStartDate.slice(0, 6)
    } else {
        formattedStartDate = formattedStartDate.slice(0, 6)
        formattedEndDate = formattedEndDate.slice(4, 12)
    }

    const formattedDateRange = `${formattedStartDate}-${formattedEndDate}`;

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(deleteTrip(trip.id))
    };
    
    return (
        <div id='trip-info-container'>
            <div id='trip-info-photo-box'>
                <img id='trip-info-photo' src={trip.listing.photoUrls[0]} alt="photo" />
            </div>
            <div id='trip-info-box'>
                <p className='trip-info'>{trip.listing.city}</p>
                <p className='trip-info'>Hosted by {trip.host.firstName}</p>
                <p className='trip-info'>{formattedDateRange}</p>
                { trip.closingDate < today ? (
                    <ReviewFormModal trip={trip} update={update} setUpdate={setUpdate}/>
                ) : (
                    <button className='trip-info' id='trip-cancel-btn' onClick={handleClick}>Cancel Trip</button>
                )}
            </div>
        </div>
    )
}

export default TripIndexItem;