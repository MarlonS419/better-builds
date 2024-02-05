import React from "react"

const ReviewTile = ({ review }) => {
    const { id, rating, comment, createdAt, updatedAt } = review
    return (
        <li>
            Rating: {rating}/5<br/>
            Comment: {comment}
        </li>
    )
}

export default ReviewTile