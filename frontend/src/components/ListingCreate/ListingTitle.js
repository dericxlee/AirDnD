import React, { useState, useRef, useEffect } from "react";
import ListingPrice from "./ListingPrice";
import ListingSubmit from "./ListingSubmit";
import ListingProgressBar from "./ListingProgressBar";
import './ListingTitle.css'
import Errors from "./Errors";

const ListingTitle = ({listing, step, setStep, totalSteps}) => {
    const [title, setTitle] = useState(listing?.title);
    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [errors, setErrors] = useState(false);
    const errorMsg = 'Field cannot be blank';
    const titleRef = useRef(null);

    const handleTitle = () => {
        const titleInput = titleRef.current

        if(titleRef && titleInput.value.trim() === ''){
            titleInput.style.border = '2px solid red'
        } else {
            titleInput.style.border = '1px solid black'
        };
    };

    useEffect(()=> {
        if(title){
            setErrors('')
            handleTitle()
        };
    }, [title]);

    const handleNext = () => {
        if(title){
            setStep(step+1)
            setNext(true)
        } else {
            setErrors(errorMsg)
            handleTitle()
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
                <div className='listing-title-header'>Now, let's give your house a title</div>
                <div className='listing-title-subheader'>Short titles work best. Have fun with it--you can always change it later.</div>
                <textarea className='listing-title-textarea' ref={titleRef} type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                <Errors errors={errors}/>
            </div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleNext={handleNext} handleBack={handleBack}/>
        </div>
        
    )
};

export default ListingTitle;