import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = ({ reviews }) => {
    const listOfReviews = reviews.map((review) => {
        return (
            <ReviewTile key={review.id} review={review} />
        )
    })

    return (
        <>
            { listOfReviews }
        </>
    )
}

export default ReviewsList