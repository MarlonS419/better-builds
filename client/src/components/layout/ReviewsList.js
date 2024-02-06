import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = ({reviews}) => {
    const listOfReviews = reviews.map((review) => {
        return (
            <li key={review.id}><ReviewTile key={reviews.id} review={review}/></li>
        )
    })

    return (
        <ul>
            {listOfReviews}
        </ul>
    )
}

export default ReviewsList