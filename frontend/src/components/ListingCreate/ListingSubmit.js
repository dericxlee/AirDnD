import React, { useEffect, useState } from "react"
import './ListingCreate.css'
import { createListing, updateListing } from "../../store/listing"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ListingInfo from "./ListingInfo"

const ListingSubmit = ({listing}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(listing?.title);
    const [description, setDescription] = useState(listing?.description);
    const [price, setPrice] = useState(listing?.price);
    const [back, setBack] = useState(false);

    const handleSubmit = () => {
        console.log('submit')
    };

    const handleBack = () => {
        setBack(true)
    };

    if(back){
        listing = {...listing, title: title, description: description}

        return (
            <ListingInfo existingListing={listing}/>
        )
    };

    return (
        <div className='listing-create-page'>
            <input type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
            <input type="text" value={description} onChange={e=> setDescription(e.target.value)} />
            <input type="text" value={price} onChange={e=>setPrice(e.target.value)} />
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default ListingSubmit;