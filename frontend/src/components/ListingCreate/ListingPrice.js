import React, { useState } from "react";
import ListingInfo from "./ListingInfo";
import ListingProgressBar from "./ListingProgressBar";
import './ListingPrice.css'
import Errors from "./Errors";
import ListingTitle from "./ListingTitle";

const ListingPrice = ({listing, step, setStep, totalSteps}) => {
    const [price, setPrice] = useState(listing?.price)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)
    const [errors, setErrors] = useState('')
    const errorMsg = 'Price must be greater than zero'

    const handleNext = () => {
        if(price > 0){
            setStep(step+1)
            setNext(true)
        } else {
            setErrors(errorMsg)
        }
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(next){
        listing = {
            ...listing,
            price: price
        };

        return (
            <ListingTitle 
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        );
    }

    if(back){
        listing = {
            ...listing,
            price: price
        };

        return (
            <ListingInfo 
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-price-container'>
                <div className='listing-price-header'>How much for one night's stay?</div>
                <div className='listing-price-subheader'>This is the amount that you will receive</div>
                <div className='listing-price-box'>
                    <div>$</div>
                    <input className='listing-price-input' type="number" value={price} onChange={e=> setPrice(e.target.value)}/> 
                    <div>per night</div>
                </div>
                <Errors errors={errors}/>
            </div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleNext={handleNext} handleBack={handleBack}/>
        </div>
    )
}

export default ListingPrice
