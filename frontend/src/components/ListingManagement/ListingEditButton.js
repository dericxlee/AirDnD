import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './ListingEditButton.css'

const ListingEditButton = ({listing}) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/host/${listing.id}`)
    };

    return (
        <>
          <button id='edit-listing-btn' onClick={handleClick}>Edit</button>
        </>
    );
}

export default ListingEditButton;