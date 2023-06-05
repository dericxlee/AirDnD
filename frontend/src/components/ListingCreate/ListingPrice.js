import React, { useState } from "react";
import ListingSubmit from "./ListingSubmit";
import ListingInfo from "./ListingInfo";
import ListingProgressBar from "./ListingProgressBar";
import './ListingPrice.css'

const ListingPrice = ({listing, step, setStep, totalSteps}) => {
    const [price, setPrice] = useState(listing?.price)
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)

    const handleNext = () => {
        if(price){
            setStep(step+1)
            setNext(true)
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
            <ListingSubmit 
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
                <div className='listing-price-title'>Quote a nightly price for your property</div>
                <div className='listing-price-box'>
                    $<input type="number" value={price} onChange={e=> setPrice(e.target.value)} />
                </div>
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

export default ListingPrice
