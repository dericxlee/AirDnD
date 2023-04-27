import { useDispatch } from "react-redux";
import React from "react";
import './ListingIndexItem.css'

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch();

    console.log(listing.title, 'title')

    return (
        <>
            <li id='listing-box'>
                <p>{listing.title}</p>
                <p>{listing.description}</p>
                <button>Here I am</button>
            </li>
        </>
    )
}

export default ListingIndexItem