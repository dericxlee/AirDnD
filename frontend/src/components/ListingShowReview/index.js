import React from "react";
import ReviewIndexItem from "./ReviewIndexItem";

const ListingShowReviews = ({reviews}) => {
    return (
        // console.log(reviews)
        reviews?.map(review => <ReviewIndexItem
            review={review}
            key={review?.id}
        />)
    )
};

export default ListingShowReviews