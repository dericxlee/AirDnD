import React, { useEffect, useState } from "react"
import './ListingCreate.css'

const ListingInfo = ({listing, setListing}) => {
    const [guests, setGuests] = useEffect('')
    const [beds, setBeds] = useEffect('')
    const [baths, setBaths] = useEffect('')
    const [bedrooms, setBedrooms] = useEffect('')
    const [next, setNext] = useState(false)

    const handleNext = () => {
        setNext(true)
    };

    useEffect(() => {
        setListing(listing => ({
            ...listing,
            maxGuests: guests,
            numBeds: beds,
            numBaths: baths,
            numBedrooms: bedrooms
        }));
    }, [guests, beds, baths, bedrooms]);

    console.log(listing, 'step 3')

    return (
        <div>
            <input type="number" value={guests} onChange={e=>setGuests(e.target.value)}/>
            <input type="number" value={beds} onChange={e=>setBeds(e.target.value)}/>
            <input type="number" value={baths} onChange={e=>setBaths(e.target.value)}/>
            <input type="number" value={bedrooms} onChange={e=>setBedrooms(e.target.value)}/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ListingInfo;