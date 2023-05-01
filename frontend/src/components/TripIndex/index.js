import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { getTrips, fetchTrips } from "../../store/trip"
import { useEffect } from "react"
import TripIndexItem from "./TripIndexItem"
import './TripIndex.css'

const TripIndex = () => {
    const dispatch = useDispatch()
    const sessioonUser = useSelector(state => state.session.user)
    const trips = useSelector(getTrips)
    const filterTrips = trips.filter(trip => trip.userId === sessioonUser.id)

    console.log(filterTrips)
    
    useEffect(()=>{
        dispatch(fetchTrips())
    }, [dispatch])

    return (
        <div>
            <ul id='trips-box-container'>
                {
                    filterTrips.map(trip => <TripIndexItem
                        trip={trip}
                        key={trip.id}
                    />)
                }
            </ul>
            <p>Can't find your reservation here?</p>
            <p>Visit the Help Center</p>
        </div>
    )
}

export default TripIndex