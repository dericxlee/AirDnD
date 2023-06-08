import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { getTrips, fetchTrips } from "../../store/trip"
import { useEffect, useState } from "react"
import TripIndexItem from "./TripIndexItem"
import './TripIndex.css'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import NoTripsBanner from "./NoTripsBanner"

const TripIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const trips = useSelector(getTrips)
    const [update, setUpdate] = useState(false)
    
    const today = new Date().toJSON().slice(0, 10);
    
    const futureTrips = trips.filter(trip => trip.closingDate > today)
    const pastTrips = trips.filter(trip => trip.closingDate < today)
    
    useEffect(()=>{
        dispatch(fetchTrips())
    }, [dispatch, update])
    
    const pastTripsMessage = () => {
        return pastTrips.length ? "Where you've been" : "You haven't completed any trips!"
    };

    const futureTripsMessage = () => {
        return "Upcoming Trips" 
    };

    if(!sessionUser){
        return (
            <Redirect to='/'/>
        );
    };

    return (
        <div className='new-page-render' id='trips-index-page'>
            <div id='trips-index-header'>
                <p>Trips</p>
            </div>
            <div id='all-trips-container'>
                { futureTrips.length ? (
                    <div id='upcoming-trips-box'>
                        <div className='trips-banner'>
                            <p className='trips-banner-header'>{futureTripsMessage()}</p>
                        </div>
                        <div className='slider' id='trips-info-box-container'>
                            {
                                futureTrips.map(trip => <TripIndexItem
                                    trip={trip}
                                    key={trip.id}
                                    today={today}
                                />)
                            }
                        </div>
                    </div>
                ) : (
                    <NoTripsBanner/>
                )}
                <div id='past-trips-box'>
                    <div className='trips-banner'>
                        <p className='trips-banner-header'>{pastTripsMessage()}</p>
                    </div>
                    

                    <div className='slider' id='past-trips-info-box-container'>
                        {
                            pastTrips.map(trip => <TripIndexItem
                                trip={trip}
                                key={trip.id}
                                today={today}
                                update={update}
                                setUpdate={setUpdate}
                            />)
                        }
                    </div>
                   
                </div>
            </div>
            <div id='trips-index-footer-box'>
                <p>Can't find your reservation here? Visit the Help Center</p>
            </div>
        </div>
    )
}

export default TripIndex