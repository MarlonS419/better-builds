import React from "react"
const { useState } = require("react")

const ReviewForm = props => {
    const [newReview, setNewReview] = useState({
        rating: null,
        comment: ""
    })
    
    const handleReviewForm = (event) => {
        setNewReview(
            {...newReview,
                [event.currentTarget.name]: event.currentTarget.value}
                )
            }
            console.log(newReview)
            
    return (
        <>
            <h3>Submit a Review</h3>
            <form>
                <label htmlFor="rating">Rating:
                    <label htmlFor="1">
                        1:<input name="rating" type="radio" value="1" onChange={handleReviewForm}/>
                    </label>
                    <label htmlFor="2">
                        2:<input name="rating" type="radio" value="2" onChange={handleReviewForm}/>
                    </label>
                    <label htmlFor="3">
                        3:<input name="rating" type="radio" value="3" onChange={handleReviewForm}/>
                    </label>
                    <label htmlFor="4">
                        4:<input name="rating" type="radio" value="4" onChange={handleReviewForm}/>
                    </label>
                    <label htmlFor="5">
                        5:<input name="rating" type="radio" value="5" onChange={handleReviewForm}/>
                    </label>
                </label>
                <label htmlFor="comment">Comment:
                    <input name="comment" type="text" onChange={handleReviewForm}/>
                </label>
            </form>
        </>
    )
}
export default ReviewForm