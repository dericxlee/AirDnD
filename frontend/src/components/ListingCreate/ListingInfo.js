import React, { useState } from "react"
import './ListingCreate.css'
import ListingSubmit from "./ListingSubmit"
import ListingAddress from "./ListingAddress"


const ListingInfo = ({listing}) => {
    const [guests, setGuests] = useState(listing?.maxGuests)
    const [beds, setBeds] = useState(listing?.numBeds)
    const [baths, setBaths] = useState(listing?.numBaths)
    const [bedrooms, setBedrooms] = useState(listing?.numBedrooms)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)

    const handleNext = () => {
        setNext(true)
    };

    const handleBack = () => {
        setBack(true)
    };

    if(guests && beds && baths && bedrooms && next){
        listing = {
            ...listing,
            maxGuests: guests, 
            numBeds: beds,
            numBaths: baths,
            numBedrooms: bedrooms 
        };

        return (
            <ListingSubmit listing={listing}/>
        );
    };

    if(back){
        listing = {
            ...listing,
            maxGuests: guests, 
            numBeds: beds,
            numBaths: baths,
            numBedrooms: bedrooms 
        };

        return (
            <ListingAddress listing={listing}/>
        );
    }

    return (
        <div className='listing-create-page'>
            <input type="text" value={guests} onChange={e=>setGuests(e.target.value)}/>
            <input type="text" value={beds} onChange={e=>setBeds(e.target.value)}/>
            <input type="text" value={baths} onChange={e=>setBaths(e.target.value)}/>
            <input type="text" value={bedrooms} onChange={e=>setBedrooms(e.target.value)}/>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default ListingInfo;