import React from "react"
import UserReviewTile from "./ReviewTile"

const UserReviewsList = (props) => {

        const userReviews = props.reviewsList
        const userReviewTiles = userReviews.map((review) => {
            return <UserReviewTile key={review.id} review={review} />
        })

    return (
        <ul>
            {userReviewTiles}
        </ul>
    )
}

export default UserReviewsList