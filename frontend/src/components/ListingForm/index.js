import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { createListing, fetchListing, updateListing, getListing } from "../../store/listing"
import './ListingForm.css'
import { useParams } from "react-router-dom";
import { useRef } from "react";

const ListingForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const {listingId} = useParams()
    let listing = useSelector(getListing(listingId))
    const hostId = sessionUser.id

    useEffect(()=> {
        if(listingId && !listing){
            // console.log('dispatch')
            dispatch(fetchListing(listingId))
        }
    }, [dispatch, listingId])

    if(!listingId){
        listing = {
            title: '', 
            description: '',
            propertyType: '',
            address: '',
            city: '',
            price: 0,
            maxGuests: 1,
            numBeds: 1,
            numBaths: 1,
            numBedrooms: 1,
        };
    }

    const persistListing = useRef(listing)

    useEffect(()=> {
        persistListing.current = listing;
    }, [dispatch, listing])

    console.log(persistListing)

    const [title, setTitle] = useState(listing?.title)
    const [description, setDescription] = useState(listing?.description)
    const [propertyType, setPropertyType] = useState(listing?.propertyType)
    const [address, setAddress] = useState(listing?.address)
    const [city, setCity] = useState(listing?.city)
    const [price, setPrice] = useState(listing?.price)
    const [maxGuests, setMaxGuests] = useState(listing?.maxGuests)
    const [numBeds, setNumBeds] = useState(listing?.numBeds)
    const [numBaths, setNumBaths] = useState(listing?.numBaths)
    const [numBedrooms, setNumBedrooms] = useState(listing?.numBedrooms)
    
    

    // const [title, setTitle] = useState(persistListing.title)
    // const [description, setDescription] = useState(persistListing.description)
    // const [propertyType, setPropertyType] = useState(persistListing.propertyType)
    // const [address, setAddress] = useState(persistListing.address)
    // const [city, setCity] = useState(persistListing.city)
    // const [price, setPrice] = useState(persistListing.price)
    // const [maxGuests, setMaxGuests] = useState(persistListing.maxGuests)
    // const [numBeds, setNumBeds] = useState(persistListing.numBeds)
    // const [numBaths, setNumBaths] = useState(persistListing.numBaths)
    // const [numBedrooms, setNumBedrooms] = useState(persistListing.numBedrooms)


    const handleSubmit = e => {
        e.preventDefault();
        listing = {...listing, title, propertyType, address, city, price, maxGuests, numBeds, numBaths, numBedrooms, description, hostId}
        if(!listingId){
            dispatch(createListing(listing))
        } else {
            dispatch(updateListing(listing))
        }
    }

    return (
        <div id='listing-form-box'>
            <form id='listing-form' onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="title" onChange={e=>setTitle(e.target.value)}/>
                <input type="text" value={propertyType} placeholder="property type" onChange={e=>setPropertyType(e.target.value)} />
                <input type="text" value={address} placeholder="address" onChange={e=>setAddress(e.target.value)} />
                <input type="text" value={city} placeholder="city" onChange={e=>setCity(e.target.value)}/>
                <input type="text" value={price} placeholder="price" onChange={e=>setPrice(e.target.value)}/>
                <input type="text" value={maxGuests} placeholder="max number of guests" onChange={e=>setMaxGuests(e.target.value)}/>
                <input type="text" value={numBeds} placeholder="number of beds" onChange={e=>setNumBeds(e.target.value)}/>
                <input type="text" value={numBaths} placeholder="number of bathrooms" onChange={e=>setNumBaths(e.target.value)} />
                <input type="text" value={numBedrooms} placeholder="number of bedrooms" onChange={e=>setNumBedrooms(e.target.value)}/>
                <input type="textarea" value={description} placeholder="description" onChange={e=>setDescription(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ListingForm;