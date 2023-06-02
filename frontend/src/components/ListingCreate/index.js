import React, { useEffect, useState } from "react"
import './ListingCreate.css'
import ListingAddress from "./ListingAddress"

const ListingCreate = () => {
    const [propertyType, setPropertyType] = useState('')
    const [next, setNext] = useState(false)

    const [listing, setListing] = useState({
        title: '', 
        description: '',
        propertyType: '',
        address: '',
        city: '',
        price: 500,
        maxGuests: 1,
        numBeds: 1,
        numBaths: 1,
        numBedrooms: 1,
    });

    useEffect(() => {
        setListing(listing => ({
            ...listing,
            propertyType: propertyType
        }));
    }, [propertyType]);

    const handleNext = () => {
        setNext(true)
    };

    if(propertyType && next){
        return (
            <ListingAddress listing={listing} setListing={setListing}/>
        )
    };

    console.log(listing, 'step 1')

    return (
        <div className='listing-create-page'>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="text" value={propertyType} onChange={e => setPropertyType(e.target.value)}/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ListingCreate;