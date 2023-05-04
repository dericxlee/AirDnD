import React from "react"

const ReviewIndexItem = ({review}) => {
    // const {user} = review.user
    console.log(review)
    return (
        <div>
            <p>{review.user.firstName}</p>
            <p>{review.body}</p>
        </div>
    )
}

export default ReviewIndexItem;