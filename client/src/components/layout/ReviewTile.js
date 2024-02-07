import React from "react"

const ReviewTile = (props) => {
    const currentReview = props.review

    return (
        <>
            <p>Rating: {currentReview.rating}/5</p> 
            <p>Comment: {currentReview.comment}</p>
        </>
        
    )
}

export default ReviewTile