import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { createListing, fetchListing, updateListing, getListing } from "../../store/listing"
import './ListingForm.css'
import { useParams } from "react-router-dom";

const ListingForm = ({listing}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // const {listingId} = useParams()
    const formType = listing ? 'Update' : 'Create' 
    // let listing = useSelector(getListing(listingId));
    const hostId = sessionUser.id

    // console.log(listing.id, 'form')
    console.log(formType, 'formtype')

    useEffect(()=> {
        if(formType === 'Update'){
            // console.log('dispatch')
            dispatch(fetchListing(listing.id))
        }
    }, [dispatch])

    if(formType === 'Create'){
        listing = {
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
        };
    }

    // const persistListing = useRef(listing)
    // console.log(persistListing)

    // useEffect(()=> {
    //     persistListing.current = listing;
    // }, [dispatch, listing])


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
        if(formType === 'Create'){
            dispatch(createListing(listing))
        } else {
            dispatch(updateListing(listing))
            console.log('updating')
        }
    }

    const handleSelect = e => {
        e.preventDefault();
        setPropertyType(e.target.value)
        console.log(propertyType)
    }

    useEffect(()=> {
        console.log(price)
    }, [propertyType, price])

    // console.log(propertyType)

    // console.log(listing)

    return (
        <div id='listing-form-container'>
            <div id='listing-form-box'>
                <div id='listing-form-header'>{formType} your Listing</div>
                <form id='listing-form' onSubmit={handleSubmit}>
                    <div id='listing-title-box'>
                        <p>Give your listing a name</p> 
                        <input type="text" value={title} placeholder="Name of listing" onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div id='listing-address-container'>
                        <p>What's the address of your property?</p>
                        <div id='listing-address-box'>
                            <div id='listing-street-box'>
                                Street Address: <input type="text" value={address} placeholder="Street address" onChange={e=>setAddress(e.target.value)} />
                            </div>
                            <div id='listing-region-box'>
                                <div id='listing-city-box'>
                                    City: <input type="text" value={city} placeholder="City" onChange={e=>setCity(e.target.value)}/>
                                </div>
                                <div id='listing-state-box'>
                                    State: <input type="text" value='California' readOnly />
                                </div>
                                <div id='listing-country-box'>
                                    Country: <input type="text" value='United States' readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='listing-property-box'>
                        Property Type: <select placeholder="property type" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                            <option value="Entire home">Entire home</option>
                            <option value="Private room">Private room</option>
                            <option value="Luxury stay">Luxury stay</option>
                        </select>
                    </div>
                    <div id='listing-slider-box'>
                        <div className='slider-box' id='listing-form-price-container'>
                            <p>Price your space</p>
                            <div id='listing-form-price-input'>
                                <p>Enter a value</p>
                                <input type="text" value={price} onChange={e=>setPrice(e.target.value)}/>
                                $1<input type="range" min='1' max='3000' value={price} onChange={e=>{setPrice(e.target.value)}}/>$3,000
                            </div>
                        </div>

                        <div className='slider-box' id='listing-form-guest-container'>
                            <p>Max Number of guests allowed</p>
                            <div id='listing-form-guest-input'>
                                <p>Enter a value</p>
                                <input type="text" value={maxGuests} onChange={e=>setMaxGuests(e.target.value)}/>
                                1 guest<input type="range" min='1' max='20' value={maxGuests} onChange={e=>setMaxGuests(e.target.value)}/>20 guests
                            </div>
                        </div>

                        <div className='slider-box'>
                            <p>Number of beds</p>
                            <div id='listing-form-beds-input'>
                                <p>Enter a value</p>
                                <input type="text" value={numBeds} onChange={e=>setNumBeds(e.target.value)} />
                                1 bed <input type="range" value={numBeds} min='1' max='20' onChange={e=>setNumBeds(e.target.value)}/> 20 beds
                            </div>
                        </div>

                        <div className='slider-box'>
                            <p>Number of Bathrooms</p>
                            <div>
                                <p>Enter a value</p>
                                <input type="text" value={numBaths} onChange={e=>setNumBaths(e.target.value)} />
                                1 bathroom <input type="range" value={numBaths} onChange={e=>setNumBaths(e.target.value)} /> 20 bathrooms
                            </div>
                        </div>

                        <div className='slider-box'>
                            <p>Number of Bedrooms</p>
                            <div>
                                <p>Enter a value</p>
                                <input type="text" value={numBedrooms} onChange={e=>setNumBedrooms(e.target.value)}/>
                                1 <input type="range" value={numBedrooms} onChange={e=>setNumBedrooms(e.target.value)}/>20
                            </div>
                        </div>
                    </div>
                    <div id='listing-form-description-container'>
                        <p>Describe your property</p>
                        <input className='form-textarea' type="textarea" value={description} onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    <div id='listing-form-submission-btn'>
                        <button type='submit'>{formType} your listing</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListingForm;