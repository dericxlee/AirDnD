import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { getTrips, fetchTrips } from "../../store/trip"
import { useEffect } from "react"
import TripIndexItem from "./TripIndexItem"
import './TripIndex.css'
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const TripIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const trips = useSelector(getTrips)

    const today = new Date().toJSON().slice(0, 10);
    // console.log(trip.startDate)

    const futureTrips = trips.filter(trip => trip.userId === sessionUser.id && trip.closingDate > today)
    const pastTrips = trips.filter(trip => trip.userId === sessionUser.id && trip.closingDate < today)

    useEffect(()=>{
        dispatch(fetchTrips())
    }, [dispatch])

    return (
        <div className='new-page-render' id='trips-index-page'>
            <div id='trips-index-header'>
                <p>Trips</p>
            </div>
            <div id='upcoming-trips-box'>
                <div id='upcoming-trips-banner'>
                    <p className='trips-sub-header'>Upcoming Trips</p>
                </div>
                <div id='trips-info-box-container'>
                    {
                        futureTrips.map(trip => <TripIndexItem
                            trip={trip}
                            key={trip.id}
                        />)
                    }
                </div>
            </div>
            <div id='past-trips-box'>
                <div id='past-trips-banner'>
                    <p className='trips-sub-header'>Where you've been</p>
                </div>
                <div id='past-trips-info-box-container'>
                    {
                        pastTrips.map(trip => <TripIndexItem
                            trip={trip}
                            key={trip.id}
                        />)
                    }
                </div>
            </div>
            <div id='trips-index-footer-box'>
                <p>Can't find your reservation here?</p>
                <Link>Visit the Help Center</Link>
            </div>
        </div>
    )
}

export default TripIndex