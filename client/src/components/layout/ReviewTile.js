import React from "react"

const ReviewTile = ({review}) => {
    return (
        <>
            <p>Rating: {review.rating}/5</p> 
            <p>Comment: {review.comment}</p>
        </>
        
    )
}

export default ReviewTile