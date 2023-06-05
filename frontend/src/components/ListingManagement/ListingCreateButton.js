import React from "react";
import './ListingCreateButton.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ListingCreateButton = () => {
    const history = useHistory()
    
    const handleClick = () => {
        return (
            history.push('/host')
        )
    }

    return (
        <button id='new-listing-btn' onClick={handleClick}>+ Create New Listing</button>
    )
};

export default ListingCreateButton;