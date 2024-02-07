import React from "react"
import ReviewTile from "./ReviewTile"

const ReviewsList = (props) => {
    const reviews = props.reviews
    const listOfReviews = reviews.map((review) => {
        return (
            <li key={review.id}><ReviewTile review={review}/></li>
        )
    })

    return (
        <ul>
            {listOfReviews}
        </ul>
    )
}

export default ReviewsList