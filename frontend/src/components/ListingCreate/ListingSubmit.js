import React, { useEffect, useState } from "react"
import './ListingCreate.css'
import { createListing, updateListing } from "../../store/listing"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ListingProgressBar from "./ListingProgressBar";
import ListingTitle from "./ListingTitle"
import './ListingSubmit.css'

const ListingSubmit = ({listing, step, setStep, totalSteps}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [description, setDescription] = useState(listing?.description);
    const [back, setBack] = useState(false);
    const [errors, setErrors] = useState(false);

    const handleDispatch = (listing) => {
        if(listing.id){
            dispatch(updateListing(listing));
            history.push('/client')
        } else {
            dispatch(createListing(listing))
            history.push('/client')
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
            setErrors(true);
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
                <div>Share what makes your place special</div>
                <input className='listing-textarea' value={description} onChange={e=> setDescription(e.target.value)} />
            </div>
            <ListingProgressBar step={step} totalSteps={totalSteps} handleSubmit={handleSubmit} handleBack={handleBack}/>
        </div>
    )
}

export default ListingSubmit;