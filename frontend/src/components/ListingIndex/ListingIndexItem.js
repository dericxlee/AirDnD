import React from "react";
import './ListingIndexItem.css'
import { NavLink } from "react-router-dom";

const ListingIndexItem = ({listing}) => {
    const price = listing.price.toLocaleString()

    return (
        <>
            <div id='listing-box'>
                <NavLink to={`/listings/${listing.id}`}>
                    <img id='index-photo' src={listing.photoUrls[0]} alt="sample house" />
                    <p className='nav-link-text'>{listing.city}, California</p>
                    <p className='nav-link-text'>${price} night</p>
                </NavLink>
            </div>
        </>
    )
}

export default ListingIndexItem