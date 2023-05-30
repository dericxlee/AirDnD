import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { getTrips, fetchTrips } from "../../store/trip"
import { useEffect } from "react"
import TripIndexItem from "./TripIndexItem"
import './TripIndex.css'
import { Link } from "react-router-dom"

const TripIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const trips = useSelector(getTrips)

    const today = new Date().toJSON().slice(0, 10);

    const futureTrips = trips.filter(trip => trip.closingDate > today)
    const pastTrips = trips.filter(trip => trip.closingDate < today)

    useEffect(()=>{
        dispatch(fetchTrips())
    }, [dispatch])

    return (
        <div className='new-page-render' id='trips-index-page'>
            <div id='trips-index-header'>
                <p>Trips</p>
            </div>
            <div id='all-trips-container'>
                <div id='upcoming-trips-box'>
                    <div className='trips-banner'>
                        <p className='trips-banner-header'>Upcoming Trips</p>
                    </div>
                    <div id='trips-info-box-container'>
                        {
                            futureTrips.map(trip => <TripIndexItem
                                trip={trip}
                                key={trip.id}
                                today={today}
                            />)
                        }
                    </div>
                </div>
                <div id='past-trips-box'>
                    <div className='trips-banner'>
                        <p className='trips-banner-header'>Where you've been</p>
                    </div>
                    <div id='past-trips-info-box-container'>
                        {
                            pastTrips.map(trip => <TripIndexItem
                                trip={trip}
                                key={trip.id}
                                today={today}
                            />)
                        }
                    </div>
                </div>
            </div>
            <div id='trips-index-footer-box'>
                <p>Can't find your reservation here? <Link id='help-center'>Visit the Help Center</Link></p>
            </div>
        </div>
    )
}

export default TripIndex