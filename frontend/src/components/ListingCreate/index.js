import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import './ListingCreate.css'
import ListingAddress from "./ListingAddress"
import ListingProgressBar from "./ListingProgressBar"
import { useSelector } from "react-redux"
import { getListing, fetchListing } from "../../store/listing"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const ListingCreate = ({wipListing}) => {
    const [propertyType, setPropertyType] = useState(wipListing?.propertyType || 'Entire home')
    const sessionUser = useSelector(state => state.session.user)
    const [next, setNext] = useState(false)
    const [step, setStep] = useState(1)
    const dispatch = useDispatch()
    const totalSteps = 5
    const {listingId} = useParams()
    const existingListing = useSelector(getListing(listingId))

    useEffect(()=> {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    let listing = {
        title: '', 
        description: '',
        propertyType: '',
        address: '',
        city: '',
        price: 300,
        maxGuests: 1,
        numBeds: 1,
        numBaths: 1,
        numBedrooms: 1,
        hostId: sessionUser.id
    };

    if(wipListing) {
        listing = wipListing
    } else if (existingListing && !wipListing){
        listing = existingListing
    };
    
    const handleNext = () => {
        if(propertyType) {
            setStep(step+1)
            setNext(true)
        };
    };

    const handleChange = (e) => {
        setPropertyType(e.target.value)
    };
    
    if(next){
        listing = {...listing, propertyType: propertyType}

        return (
            <ListingAddress 
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-radio-container'>
                <div className='listing-radio-header'>What type of place will guests have?</div>
                <div className='listing-radio-box'>
                    <input 
                        type="radio"
                        id='entire-home'
                        name='property'
                        value='Entire home'
                        onChange={handleChange}
                        checked={propertyType === 'Entire home'} 
                    />
                    <label for='entire-home'>
                        <div className='radio-label-box'>
                            <p>An entire place</p>
                            <p>Guest have the whole place to themselves.</p>
                        </div>
                    </label>
                
                    <input 
                        type="radio" 
                        id='private-room'
                        name='property'
                        value='Private room'
                        onChange={handleChange}
                        checked={propertyType === 'Private room'}
                    />
                    <label for='private-room'>
                        <div className='radio-label-box'>
                            <p>A room</p>
                            <p>Guests have their own room in a home, plus access to shared spaces.</p>
                        </div>
                    </label>
                
                    <input 
                        type="radio" 
                        id='luxury-stay'
                        name='property'
                        value='Luxury stay'
                        onChange={handleChange}
                        checked={propertyType === 'Luxury stay'}
                    />
                    <label for='luxury-stay'>
                        <div className='radio-label-box'>
                            <p>Luxury stay</p>
                            <p>Guests have an entire estate to explore.</p>
                        </div>
                    </label>
                
                </div>
            </div>
            <div className='listing-form-bottom-overlay'>
                <ListingProgressBar step={step} totalSteps={totalSteps}/>
                <div className='listing-form-bottom-btns'>
                    <div></div>
                    <button className='listing-next-btn' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ListingCreate;