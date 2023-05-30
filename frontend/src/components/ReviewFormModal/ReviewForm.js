import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import './ReviewForm.css'

const ReviewForm = ({trip}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);

    const review = {
        userId: sessionUser?.id,
        listingId: trip.listing?.id,
        body: body,
        rating: rating
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createReview(review))
    };

    return (
        <>
            <div className="review-form-info-container">
                <div className="review-form-info-box">
                    <p>{trip.listing.title} hosted by {trip.host.firstName}</p>
                    <img className="review-form-img" src={trip.listing.photoUrls[0]} alt="" />
                    <p className="" >{trip.listing.city}</p>
                    <p>{trip.startDate}-{trip.closingDate}</p>
                </div>
            </div>
            <div className="review-form-input-container">
                <form className="review-form-input-box">
                    <input className='review-form-input-body' type="textarea" value={body} onChange={e=>setBody(e.target.value)}/>
                    <input type="text" value={rating} onChange={e=>setRating(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            
            
        </>
    )
}

export default ReviewForm;