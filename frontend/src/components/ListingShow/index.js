import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import { useEffect } from "react";


const ListingShow = listing => {
    const listingId = useParams()
    const dispatch = useDispatch()
    const listing = useSelector(getListing(listingId))

    useEffect(()=> {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])

    return (
        <div>
            <h1>{listing.title}</h1>
            <p>{listing.city}</p>
            <p>{listing.property_type} hosted by</p>
            <p>{listing.max_guests}</p>
            <p>{listing.num_beds}</p>
            <p>{listing.num_baths}</p>
            <p>{listing.num_bedrooms}</p>
            <p>{listing.description}</p>
        </div>
    )
}

export default ListingShow