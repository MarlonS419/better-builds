import React from "react"
import UserReviewTile from "./ReviewTile"

const UserReviewsList = ({ reviewsList }) => {
    const userReviewTiles = reviewsList.map((review) => {
        return <UserReviewTile key={review.id} review={review} />
    })

    return (
        <ul>
            {userReviewTiles}
        </ul>
    )
}

export default UserReviewsList