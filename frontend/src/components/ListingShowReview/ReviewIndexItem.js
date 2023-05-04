import React from "react"
import './ReviewIndexItem.css'

const ReviewIndexItem = ({review}) => {
    // const {user} = review.user
    return (
        <div id='review-index-item-box'>
            <div id='review-user-box'>
                <div id='review-user-avatar-box'>
                    <img className='nav-avatar' src={review.user.photoUrl} alt="" />
                </div>
                <div id='review-user-info-box'>
                    <p>{review.user.firstName}</p>
                    <p>May 2023</p>
                </div>
            </div>
            <div id='review-body-box'>
                <p>{review.body}</p>
            </div>
        </div>
    )
}

export default ReviewIndexItem;