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
                <div id='listing-form-header'>{formType} your Listing!</div>
                <form id='listing-form' onSubmit={handleSubmit}>
                    <div id='listing-title-box'>
                        <p>Title</p> 
                        <input type="text" value={title} placeholder="Title for your listing" onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div id='listing-address-container'>
                        <div>Address</div>
                        <div id='listing-street-box'>
                            <input type="text" value={address} placeholder="Street address" onChange={e=>setAddress(e.target.value)} />
                        </div>
                        <div id='listing-region-box'>
                            <div id='listing-city-box'>
                                <div>City</div>
                                <input type="text" value={city} placeholder="City" onChange={e=>setCity(e.target.value)}/>
                            </div>
                            <div id='listing-state-box'>
                                <div>State</div>
                                <input type="text" value='CA' readOnly />
                            </div>
                            <div id='listing-country-box'>
                                <input type="text" value='United States' readOnly />
                            </div>
                        </div>
                    </div>
                    <div id='listing-property-box'>
                        Property type <select placeholder="property type" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                            <option value="Entire home">Entire home</option>
                            <option value="Private room">Private room</option>
                            <option value="Luxury stay">Luxury stay</option>
                        </select>
                    </div>
                    <div id='listing-slider-box'>
                        <div className='slider-box' id='listing-form-price-container'>
                            <div className='slider-left-box'>
                                <div>Price per night</div>
                                <input id='price-input-box' type="number" value={price} onChange={e=>setPrice(e.target.value)}/>
                            </div>
                            <div className='slider-right-box'>
                                <div>$1</div>
                                <input type="range" min='1' max='5000' value={price} onChange={e=>{setPrice(e.target.value)}}/>
                                <div>$5,000</div>
                            </div>
                        </div>
                        <div className='slider-box' id='listing-form-guest-container'>
                            <div className='slider-left-box'>
                                <div>Max number of guests</div>
                                <input type="number" value={maxGuests} onChange={e=>setMaxGuests(e.target.value)}/>
                            </div>
                            <div className='slider-right-box'>
                                <div>1</div>
                                <input type="range" min='1' max='20' value={maxGuests} onChange={e=>setMaxGuests(e.target.value)}/>
                                <div>20</div>
                            </div>
                        </div>
                        <div className='slider-box'>
                            <div className='slider-left-box'>
                                <div>Number of bedrooms</div>
                                <input type="text" value={numBedrooms} onChange={e=>setNumBedrooms(e.target.value)}/>
                            </div>
                            <div className='slider-right-box'>
                                <div>1</div>
                                <input type="range" value={numBedrooms} min='1' max='20' onChange={e=>setNumBedrooms(e.target.value)}/>
                                <div>20</div>
                            </div>
                        </div>

                        <div className='slider-box'>
                            <div className='slider-left-box'>
                                <div>Number of beds</div>
                                <input type="text" value={numBeds} onChange={e=>setNumBeds(e.target.value)} />
                            </div>
                            <div className='slider-right-box'>
                                <div>1</div>
                                <input type="range" value={numBeds} min='1' max='20' onChange={e=>setNumBeds(e.target.value)}/>
                                <div>20</div>
                            </div>
                        </div>

                        <div className='slider-box'>
                            <div className='slider-left-box'>
                                <div>Number of bathrooms</div>
                                <input type="text" value={numBaths} onChange={e=>setNumBaths(e.target.value)} />
                            </div>
                            <div className='slider-right-box'>
                                <div>1</div>
                                <input type="range" value={numBaths} min='1' max='20' onChange={e=>setNumBaths(e.target.value)} />
                                <div>20</div>
                            </div>
                        </div>
                    </div>
                    <div id='listing-form-description-container'>
                        <div>Description of your property</div>
                        <textarea className='form-textarea' value={description} onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    <div id='listing-form-submit-box'>
                        <button id='listing-form-btn' type='submit'>{formType}!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListingForm;