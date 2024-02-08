import React from "react"
import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors.js"
const { useState } = require("react")

const ReviewForm = ({buildId, build, setBuild}) => {
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
    
    const [reviewErrors, setReviewErrors] = useState({})
    
    const validateReviewForm = () => {
        const requiredFields = [{rating: "Rating"}]
        
        let errors = {}
        for (const fieldObject of requiredFields) {
            for (const key in fieldObject) {
                if (!newReview[key]) {
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

    const postReview = async (event) => {
        event.preventDefault()
        if (validateReviewForm()) {
            try {
                const response = await fetch(`/api/v1/builds/${buildId}/reviews`, {
                    method: "POST",
                    headers: new Headers({ "Content-Type": "application/json" }),
                    body: JSON.stringify(newReview)
                })
                if (!response.ok) {
                    if(response.status === 422) {
                        const body = await response.json()
                        const newErrors = translateServerErrors(body.errors)
                        return setReviewErrors(newErrors)
                    } else {
                        const errorMessage = `${response.status} (${response.statusText})`
                        const error = new Error(errorMessage)
                        throw(error)
                    }
                } else {
                    const body = await response.json()
                    const updatedReviewArray = build.reviews.concat(body.reviewToAdd)
                    
                    setBuild({...build, reviews: updatedReviewArray})
                }
            } catch(error) {
                console.error(`Error in fetch: ${error.message}`)
            }
        }
    }

    return (
        <>
            <h3>Submit a Review</h3>
            <ErrorList errors={reviewErrors} />
            <form onSubmit={postReview}>
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