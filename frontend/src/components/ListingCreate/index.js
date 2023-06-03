import React, { useEffect, useState } from "react"
import './ListingCreate.css'
import ListingAddress from "./ListingAddress"
import { useSelector } from "react-redux"

const ListingCreate = ({existingListing}) => {
    const [propertyType, setPropertyType] = useState(existingListing?.propertyType || 'Entire home')
    const sessionUser = useSelector(state => state.session.user)
    const [next, setNext] = useState(false)
    
    let listing = {
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
        hostId: sessionUser.id
    }

    if(existingListing) {
        listing = existingListing
    };
    
    const handleNext = () => {
        if(propertyType) setNext(true)
    };

    const handleChange = (e) => {
        setPropertyType(e.target.value)
    };
    
    if(next){
        listing = {...listing, propertyType: propertyType}

        return (
            <ListingAddress listing={listing}/>
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-radio-container'>
                <p>What type of place will guests have?</p>
                <div className='listing-radio-box'>
                    <input 
                        type="radio"
                        id='entire-home'
                        name='property'
                        value='Entire home'
                        onChange={handleChange}
                        checked={propertyType === 'Entire home'} 
                    />
                    <label for='entire-home'>An entire place</label>
                
                
                    <input 
                        type="radio" 
                        id='luxury-stay'
                        name='property'
                        value='Luxury stay'
                        onChange={handleChange}
                        checked={propertyType === 'Luxury stay'}
                    />
                    <label for='luxury-stay'>Luxury Stay</label>
                
                    <input 
                        type="radio" 
                        id='private-room'
                        name='property'
                        value='Private room'
                        onChange={handleChange}
                        checked={propertyType === 'Private room'}
                    />
                    <label for='private-room'>A room</label>
                </div>
            </div>
            <div>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default ListingCreate;