import React from "react"
import ErrorList from "./ErrorList"
const { useState } = require("react")


const ReviewForm = (props) => {
    const [newReview, setNewReview] = useState({
        rating: null,
        comment: ""
    })
    const {reviewErrors, setReviewErrors} = props

    const handleReviewForm = (event) => {
        setNewReview(
            {...newReview,
            [event.currentTarget.name]: event.currentTarget.value}
        )
    }
    
    let errors = {}
    const validateReviewForm = () => {
        const requiredFields = [{rating: "Rating"}]

        for (const fieldObject of requiredFields) {
            for (const key in fieldObject) {
                if (newReview[key] === null) {
                    errors = {...errors, [fieldObject[key]]: "is required!"}
                }
            }
        }
        if (!_.isEmpty(errors)) {
            setReviewErrors(errors)
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newReview.rating){
        props.postReview(newReview)
        }
    }
            
    return (
        <>
            <h3>Submit a Review</h3>
            <ErrorList errors={reviewErrors} />
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Submit Review!" />
            </form>
        </>
    )
}
export default ReviewForm