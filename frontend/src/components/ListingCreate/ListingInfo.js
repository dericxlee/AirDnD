import React, { useState } from "react"
import './ListingCreate.css'
import ListingPrice from "./ListingPrice"
import ListingAddress from "./ListingAddress"
import NumberInput from "../NumberInput"
import ListingProgressBar from "./ListingProgressBar"
import './ListingInfo.css'


const ListingInfo = ({listing, step, setStep, totalSteps}) => {
    const [guests, setGuests] = useState(listing?.maxGuests)
    const [beds, setBeds] = useState(listing?.numBeds)
    const [baths, setBaths] = useState(listing?.numBaths)
    const [bedrooms, setBedrooms] = useState(listing?.numBedrooms)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)

    const handleNext = () => {
        if(guests && beds && baths && bedrooms){
            setStep(step+1)
            setNext(true)
        };
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(next){
        listing = {
            ...listing,
            maxGuests: guests, 
            numBeds: beds,
            numBaths: baths,
            numBedrooms: bedrooms 
        };

        return (
            <ListingPrice 
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps}
            />
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
            <ListingAddress 
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps}
            />
        );
    }

    return (
        <div className='listing-create-page'>
            <div className='listing-info-input-container'>
                <div className='listing-info-header'>Share some basics about your place</div>
                <div className='listing-info-subheader'>You'll add more details later, like bed types.</div>
                <div className='listing-info-input-list'>
                    <div className='listing-info-input-box'>
                        Guests
                        <NumberInput input={guests} setInput={setGuests}/>
                    </div>
                    <div className="listing-info-input-box">
                        Bedrooms
                        <NumberInput input={bedrooms} setInput={setBedrooms}/>
                    </div>
                    <div className="listing-info-input-box">
                        Beds
                        <NumberInput input={beds} setInput={setBeds}/>
                    </div>
                    <div className="listing-info-input-box">
                        Bathrooms
                        <NumberInput input={baths} setInput={setBaths}/>
                    </div>
                </div>
            </div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleNext={handleNext} handleBack={handleBack}/>
        </div>
    )
}

export default ListingInfo;