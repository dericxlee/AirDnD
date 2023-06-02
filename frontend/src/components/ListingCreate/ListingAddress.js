import React, { useState, useEffect } from "react";
import './ListingCreate.css'
import ListingInfo from "./ListingInfo";
import ListingCreate from ".";

const ListingAddress = ({listing, setListing}) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)

    const handleNext = () => {
        setNext(true)
    };

    const handleBack = () => {
        setBack(true)
    };

    useEffect(() => {
        setListing(listing => ({
            ...listing,
            address: address,
            city: city
        }));
    }, [address, city]);

    if(address && city && next){
        return (
            <ListingInfo listing={listing} setListing={setListing}/>
        )
    };

    if(back){
        return (
            <ListingCreate listing={listing} setListing={setListing}/>
        )
    };

    console.log(listing, 'step 2')

    return (
        <div className='listing-create-page'>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ListingAddress