import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import { useEffect } from "react";
import './ListingShow.css'


const ListingShow = () => {
    const {listingId} = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(getListing(listingId));

    useEffect(()=> {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])

    // useEffect(() => {
    //     console.log(listing)
    // }, [listing])

    return (
        <div id='show-page-container'>
            <div id='show-page-title-box'><p id='show-page-title'>{listing?.title}</p></div>
            <div id='show-page-location-box'><p id='show-page-location'>{listing?.city}, California, United States</p></div>
            <div id='photo-span-container'>
                <div id='photo-container'>
                    <div id='photo-divider-container'>
                        <img id='big-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample photo" />
                    </div>
                    <div id='photo-divider-container'>
                        <img id='small-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample" />
                        <img id='small-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample" />
                        <img id='small-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample" />
                        <img id='small-photo' src="https://cdn.dribbble.com/users/226242/screenshots/18014512/airbnb_icon.png" alt="sample" />
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
                        <span id='show-page-description'>{listing?.description}</span>
                    </div>
                </div>
                <div id='show-page-booking-form'>
                    Reservation form here
                </div>
            </div>
        </div>
    )
}

export default ListingShow