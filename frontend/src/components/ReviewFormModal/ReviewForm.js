import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, updateReview, deleteReview } from "../../store/review";
import './ReviewForm.css'
import { Rating } from 'react-simple-star-rating';
import Errors from "../ListingCreate/Errors";

const ReviewForm = ({trip, review, handleClose}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState('');

    const tripStartDate = trip.startDate;
    const tripEndDate = trip.closingDate;

    const startDate = new Date(tripStartDate)
    const endDate = new Date(tripEndDate)

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedStartDate = startDate.toLocaleDateString("en-US", options);
    const formattedEndDate = endDate.toLocaleDateString("en-US", options);

    const formattedDateRange = `${formattedStartDate} to ${formattedEndDate}`;
    
    if(!review) {
        review = {
            userId: sessionUser?.id,
            listingId: trip.listing?.id,
            tripId: trip.id,
            body: body,
            rating: rating
        };
    };

    useEffect(()=> {
        if(review.id) {
            setBody(review.body)
            setRating(review.rating)
        };
    }, [dispatch])
    
    const handleCreate = (e) => {
        e.preventDefault()
        if(!body){
            setErrors('Field cannot be blank')
        } else if (!rating){
            setErrors('Please give the trip a rating')
        } else {
            review = {...review, body, rating}
            dispatch(createReview(review))
            handleClose()
        };
    };

    const handleUpdate = (e) => {
        e.preventDefault()
        if(!body){
            setErrors('Field cannot be blank')
        } else if (!rating){
            setErrors('Please give the trip a rating')
        } else {
            review = {...review, body, rating}
            dispatch(updateReview(review))
            handleClose()
        };
    };

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id))
        handleClose()
    };

    const handleRating = (rate) => {
        setRating(rate)
    };

    return (
        <>
            <div className="review-form-info-container">
                <div className="review-form-info-box">
                    <div className="review-form-host-box">
                        <p className='review-form-title'>{trip.listing.city} </p> 
                        <p>hosted by {trip.host.firstName}</p> 
                    </div>
                    <img className="review-form-img" src={trip.listing.photoUrls[0]} alt="" />
                    <p className='review-form-stay-date'>You stayed here from {formattedDateRange}!</p>
                </div>
            </div>
            <div className="review-form-input-container">
                <form className="review-form-input-box">
                    <p className='review-form-input-header'>How was your stay at {trip.host.firstName}'s place?</p>
                    <textarea className='review-form-input-body' type="textarea" value={body} onChange={e=>setBody(e.target.value)} placeholder="Write a public review"/>
                    <div className='review-form-rating-box'>
                        <Rating onClick={handleRating} initialValue={rating}/>
                    </div>
                    <Errors errors={errors}/>
                    { !review.id ? (
                        <div className="review-form-button-box">
                            <button className='review-form-create-btn' onClick={handleCreate}>Post Review</button>
                        </div>
                    ) : (
                        <div className="review-form-button-box">
                            <button className='review-form-update-btn' onClick={handleUpdate}>Edit Review</button>
                            <button className='review-form-delete-btn' onClick={handleDelete}>Delete Review</button>
                        </div>
                    )}
                </form>
            </div>
            <button onClick={handleClose} className='close-button'>X</button>
        </>
    )
}

export default ReviewForm;