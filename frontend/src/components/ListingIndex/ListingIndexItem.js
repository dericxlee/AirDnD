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
                <Link to={`/listings/${listing.id}`}>Link here</Link>
                <img id='index-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample house" />
                <p>{listing.title}</p>
                <p>{listing.description}</p>
            </li>
        </>
    )
}

export default ListingIndexItem