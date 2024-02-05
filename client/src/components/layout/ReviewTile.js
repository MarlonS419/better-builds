import React from "react"

const ReviewTile = ({ id, rating, comment, createdAt, updatedAt }) => {
    return (
        <li>
            Rating: {rating}/5<br/>
            Comment: {comment}
        </li>
    )
}

export default ReviewTile