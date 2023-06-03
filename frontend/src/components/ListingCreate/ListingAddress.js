import React, { useState, useEffect } from "react";
import './ListingCreate.css'
import ListingInfo from "./ListingInfo";
import ListingCreate from ".";

const ListingAddress = ({listing}) => {
    const [address, setAddress] = useState(listing?.address)
    const [city, setCity] = useState(listing?.city)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)

    const handleNext = () => {
        setNext(true)
    };

    const handleBack = () => {
        setBack(true)
    };

    if(address && city && next){
        listing = {...listing, address: address, city: city}
        return (
            <ListingInfo listing={listing}/>
        )
    };

    if(back){
        listing = {...listing, address: address, city: city}
        return (
            <ListingCreate existingListing={listing}/>
        )
    };

    console.log(listing, 'step 2')

    return (
        <div className='listing-create-page'>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default ListingAddress