import React, { useState, useEffect } from "react";
import './ListingCreate.css'
import './ListingAddress.css'
import ListingInfo from "./ListingInfo";
import ListingCreate from ".";
import ListingProgressBar from "./ListingProgressBar";
import Errors from "./Error";
import { useRef } from "react";

const ListingAddress = ({listing, step, setStep, totalSteps}) => {
    const [address, setAddress] = useState(listing?.address)
    const [city, setCity] = useState(listing?.city)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)
    const [errors, setErrors] = useState(false)
    const addressRef = useRef(null)
    const cityRef = useRef(null)

    const handleRef = (input) => {
        const currentInput = input.current

        if(input && currentInput.value.trim() === ''){
            currentInput.style.border = '2px solid red'
        } else {
            currentInput.style.border = '1px solid black'
        }
    }

    const handleNext = () => {
        if(address && city){
            setStep(step+1)
            setNext(true)
        } else {
            setErrors(true)
            handleRef(addressRef)
            handleRef(cityRef)
        }
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(next){
        listing = {...listing, address: address, city: city}
        return (
            <ListingInfo 
                listing={listing}
                step={step}
                setStep={setStep}
                totalSteps={totalSteps}
            />
        )
    }

    if(back){
        listing = {...listing, address: address, city: city}
        return (
            <ListingCreate 
                wipListing={listing}
                step={step}
                setStep={setStep}
                totalSteps={totalSteps}
            />
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-address-box'>
                <div className='listing-address-title'>What's the address of your property?</div>
                <div>Your address is only shared with guests after they've made a reservation.</div>
                <div className='listing-street-box'>
                    <div>Street Address</div>
                    <input ref={addressRef} type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className='listing-region-box'>
                    <div className='listing-city-box'>
                        <div>City</div>
                        <input ref={cityRef} type="text" value={city} onChange={e => setCity(e.target.value)} />
                    </div>
                    <div className='listing-state-box'>
                        <div>State</div>
                        <input type="text" value='CA' readOnly/>
                    </div>
                    <div className='listing-country-box'>
                        <div>Country</div>
                        <input type="text" value='United States' readOnly />
                    </div>
                </div>
                <Errors errors={errors}/>
            </div>
            <div className='listing-form-bottom-overlay'>
                <ListingProgressBar step={step} totalSteps={totalSteps}/>
                <div className='listing-form-bottom-btns'>
                    <button className='listing-back-btn' onClick={handleBack}>Back</button>
                    <button className='listing-next-btn' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ListingAddress