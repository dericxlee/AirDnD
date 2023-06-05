import React, { useEffect, useState } from "react"
import './ListingCreate.css'
import { createListing, updateListing } from "../../store/listing"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ListingPrice from "./ListingPrice";
import ListingProgressBar from "./ListingProgressBar";
import './ListingSubmit.css'

const ListingSubmit = ({listing, step, setStep, totalSteps}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(listing?.title);
    const [description, setDescription] = useState(listing?.description);
    const [back, setBack] = useState(false);

    const handleSubmit = () => {
        if(title && description){
            listing = {
                ...listing,
                title: title,
                description: description
            }
            dispatch(createListing(listing))
        }
    };

    const handleBack = () => {
        setStep(step-1)
        setBack(true)
    };

    if(back){
        listing = {...listing, title: title, description: description}

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
            <div className='listing-submit-container'>
                Title your property
                <input type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
                Give a description of your listing
                <input type="text" value={description} onChange={e=> setDescription(e.target.value)} />
            </div>
            <div className='listing-form-bottom-overlay'>
                <ListingProgressBar step={step} totalSteps={totalSteps}/>
                <div className='listing-form-bottom-btns'>
                    <button className='listing-back-btn' onClick={handleBack}>Back</button>
                    <button className='listing-next-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ListingSubmit;