import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = ({reviews}) => {
    const listOfReviews = reviews.map((review) => {
        return (
            <ReviewTile review={review}/>
        )
    })
    return (
        <ul>
            {listOfReviews}
        </ul>
    )
}

export default ReviewsList