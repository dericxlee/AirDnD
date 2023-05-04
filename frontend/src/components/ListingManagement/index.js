import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings , fetchListings} from "../../store/listing";
import { useEffect } from "react";
import './ListingManagement.css'
import ListingDeleteButton from "./ListingDeleteButton";
import { NavLink } from "react-router-dom";
import NewListingButton from "../ListingFormModal";
import ListingEditButton from "./ListingEditButton";

const ListingManagement = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const listings = useSelector(getListings)
    const filterListings = Object.values(listings).filter(l => l.hostId === sessionUser.id)

    useEffect(()=> {
        dispatch(fetchListings())
    }, [dispatch])

    return (
        <div id='listing-management-box'>
            <div id='listing-table-box'>
                <div id='manage-listing-msg-box'><p id='manage-listing-msg'>Manage Listing</p></div>
                <div id='new-listing-btn-box'><NewListingButton/></div>
                <table id='listing-table'>
                    <tr id='listing-table-header'>
                        <th>Airdnd Listing ID</th>
                        <th>Airdnd Listing Name</th>
                        <th>Local Name</th>
                        <th>Sync Status</th>
                        <th>Listed</th>
                        <th>Edit</th>
                        <th>Unlink</th>
                        <th>Delete</th>
                    </tr>
                    {
                        filterListings.map(listing => 
                            <tr id='listing-table-data' listing={listing} key={listing.id}>
                                <th>{listing.id}</th>
                                <th>{listing.title}</th>
                                <th><button className='dummy-btn'>Connect Roomtype</button></th>
                                <th><button className='dummy-btn'>Connect Listing</button></th>
                                <th>Listed</th>
                                <th><ListingEditButton listing={listing}/></th>
                                <th></th>
                                <th><ListingDeleteButton listingId={listing.id}/></th>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default ListingManagement;