import React, { useState } from "react";
import ListingPrice from "./ListingPrice";
import ListingSubmit from "./ListingSubmit";
import ListingProgressBar from "./ListingProgressBar";
import './ListingTitle.css'

const ListingTitle = ({listing, step, setStep, totalSteps}) => {
    const [title, setTitle] = useState(listing?.title);
    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [errors, setErrors] = useState(false);

    const handleNext = () => {
        if(title){
            setStep(step+1)
            setNext(true)
        } else {
            setErrors(true)
        };
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(next){
        listing = {...listing, title: title}

        return (
            <ListingSubmit
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        )
    };

    if(back) {
        listing = {...listing, title: title}

        return (
            <ListingPrice
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-title-container'>
                <div>Now, let's give your house a title</div>
                <div>Short titles work best. Have fun with it--you can always change it later</div>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
            </div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleNext={handleNext} handleBack={handleBack}/>
        </div>
        
    )
};

export default ListingTitle;