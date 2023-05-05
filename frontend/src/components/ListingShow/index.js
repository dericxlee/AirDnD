import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import { useEffect } from "react";
import './ListingShow.css'
import TripForm from "../TripForm";
import ListingShowReviews from "../ListingShowReview";


const ListingShow = () => {
    const {listingId} = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(getListing(listingId));

    useEffect(()=> {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])

    // console.log(listing?.photoUrls[0])
    // useEffect(() => {
    //     console.log(listing)
    // }, [listing])

    const reviews = listing?.reviews
    const length = reviews?.length

    return (
        <div id='show-page-container'>
            <div id='show-page-title-box'><p id='show-page-title'>{listing?.title}</p></div>
            <div id='show-page-location-box'><p id='show-page-location'>{listing?.city}, California, United States</p></div>
            <div id='photo-span-container'>
                <div id='photo-container'>
                    <div id='main-photo-divider-container'>
                        <img id='big-photo' src={listing?.photoUrls[0]} alt="sample photo" />
                    </div>
                    <div id='photo-divider-container'>
                        <img className='top-small-photo' src={listing?.photoUrls[1]} alt="sample" />
                        <img className='top-small-photo' id='third-photo' src={listing?.photoUrls[2]} alt="sample" />
                        <img className='small-photo' src={listing?.photoUrls[3]} alt="sample" />
                        <img className='small-photo' id='fifth-photo' src={listing?.photoUrls[4]} alt="sample" />
                    </div>
                </div>
            </div>
            <div id='show-page-bottom-divider-box'>
                <div id='show-page-information-box'>
                    <div id='show-page-host-box'>
                        <p id='show-page-host'>{listing?.propertyType} hosted by {listing?.host.firstName}</p>
                    </div>
                    <div id='show-page-attribute-box'>
                        <ul id='show-page-attribute'>
                            <li>{listing?.maxGuests} guests </li>
                            <li>{listing?.numBedrooms} bedrooms </li>
                            <li>{listing?.numBeds} beds </li>
                            <li>{listing?.numBaths} baths </li>
                        </ul>
                    </div>
                    <div id='show-page-description-box'>
                        <hr id='show-page-description-line'></hr>
                        <p id='show-page-description'>{listing?.description}</p>
                        <hr id='show-page-description-line'/>
                    </div>
                    <div id='reviews-index-mega-container'>
                        <div id='reviews-index-header'>
                            <li>4.87</li>
                            <li><span>{length} reviews</span></li>
                        </div>
                        <div id='reviews-index-container'>
                            <ListingShowReviews reviews={reviews}/>
                        </div>
                    </div>
                </div>
                <div id='show-page-booking-form'>
                    <TripForm listing={listing}/>
                </div>
            </div>
        </div>
    )
}

export default ListingShow