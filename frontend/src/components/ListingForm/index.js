import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { createListing } from "../../store/listing"
import './ListingForm.css'

const ListingForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser.id)
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState()
    const [maxGuests, setMaxGuests] = useState()
    const [numBeds, setNumBeds] = useState()
    const [numBaths, setNumBaths] = useState()
    const [numBedrooms, setNumBedrooms] = useState()
    
    const listing = {
        title, 
        description,
        propertyType,
        address,
        city,
        price,
        maxGuests,
        numBeds,
        numBaths,
        numBedrooms,
        hostId: sessionUser.id
    };
    // useEffect(()=>{
    //     setHostId(sessionUser.id)
    // }, [])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createListing(listing))
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