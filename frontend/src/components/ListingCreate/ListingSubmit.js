import React, { useEffect, useState, useRef } from "react"
import './ListingCreate.css'
import { createListing, updateListing } from "../../store/listing"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ListingProgressBar from "./ListingProgressBar";
import ListingTitle from "./ListingTitle"
import './ListingSubmit.css'
import Errors from "./Errors"

const ListingSubmit = ({listing, step, setStep, totalSteps}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [description, setDescription] = useState(listing?.description);
    const [back, setBack] = useState(false);
    const [errors, setErrors] = useState('');
    const errorMsg = 'Field cannot be blank';
    const descrRef = useRef(null);
    
    const handleRef = () => {
        const descrInput = descrRef.current
        
        if(descrRef && descrInput.value.trim() === ''){
            descrInput.style.border = '2px solid red'
        } else {
            descrInput.style.border = '1px solid black'
        };
    };
    
    useEffect(()=> {
        if(description){
            setErrors('');
            handleRef()
        }
    }, [description]);

    const handleDispatch = (listing) => {
        if(listing.id){
            dispatch(updateListing(listing));
            history.push('/client')
        } else {
            dispatch(createListing(listing))
            history.push('/')
        };
    }

    const handleSubmit = () => {
        if(description){
            listing = {
                ...listing,
                description: description
            };
            handleDispatch(listing)
        } else {
            handleRef();
            setErrors(errorMsg);
        };
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(back){
        listing = {...listing, description: description}

        return (
            <ListingTitle
                listing={listing} 
                step={step}
                setStep={setStep} 
                totalSteps={totalSteps} 
            />
        )
    };

    return (
        <div className='listing-create-page'>
            <div className='listing-submit-container'>
                <div className='listing-submit-header'>Create your description</div>
                <div className='listing-submit-subheader'>Share what makes your place special.</div>
                <textarea className='listing-textarea' ref={descrRef} type='textarea' value={description} onChange={e=> setDescription(e.target.value)} />
                <Errors errors={errors}/>
            </div>
            <div className='listing-save-msg'>Hit save when you're done!</div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleSubmit={handleSubmit} handleBack={handleBack}/>
        </div>
    )
}

export default ListingSubmit;