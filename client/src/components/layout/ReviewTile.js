import React from "react"

const ReviewTile = ({ id, rating, comment }) => {
    return (
        <>
            <p>Rating: {rating}/5</p> 
            <p>Comment: {comment}</p>
        </>
        
    )
}

export default ReviewTile