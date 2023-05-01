import { useDispatch } from "react-redux";
import React from "react";
import './ListingIndexItem.css'
import ListingShow from "../ListingShow";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch();

    return (
        <>
            <li id='listing-box'>
                <NavLink to={`/listings/${listing.id}`}>
                    <img id='index-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample house" />
                    <p className='nav-link-text'>{listing.city}, California</p>
                    <p className='nav-link-text'>${listing.price} night</p>
                </NavLink>
            </li>
        </>
    )
}

export default ListingIndexItem