import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings , manageListings} from "../../store/listing";
import { useEffect } from "react";
import './ListingManagement.css'
import ListingDeleteButton from "./ListingDeleteButton";
import ListingCreateButton from "./ListingCreateButton";
import ListingEditButton from "./ListingEditButton";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const ListingManagement = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const listings = useSelector(getListings)

    const readPrice = (price) => {
        return price.toLocaleString();
    }

    useEffect(()=> {
        dispatch(manageListings())
    }, [dispatch, listings?.length])

    if(!sessionUser){
        return (
            <Redirect to='/'/>
        );
    };

    return (
        <>
            {(!sessionUser && <Redirect to='/'/>) }
            <div id='listing-management-box'>
                <div id='listing-table-box'>
                    <div id='manage-listing-msg-box'><p id='manage-listing-msg'>Manage Listing</p></div>
                    <div id='new-listing-btn-box'><ListingCreateButton/></div>
                    <table id='listing-table'>
                        <tr id='listing-table-header'>
                            <th>Airdnd Listing ID</th>
                            <th>Airdnd Listing Name</th>
                            <th>Nightly Fee</th>
                            <th>Show Page</th>
                            <th>Listed</th>
                            <th>Edit</th>
                            <th>Unlink</th>
                            <th>Delete</th>
                        </tr>
                        {
                            listings.map(listing => 
                                <tr id='listing-table-data' listing={listing} key={listing.id}>
                                    <th>{listing.id}</th>
                                    <th>{listing.title}</th>
                                    <th>${readPrice(listing.price)}</th>
                                    <th>
                                        <button className='dummy-btn'>
                                            <NavLink to={`/listings/${listing.id}`}>
                                                Go to Page
                                            </NavLink>
                                        </button></th>
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
        </>
    )
}

export default ListingManagement;