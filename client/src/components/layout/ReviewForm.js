import React from "react"
const { useState } = require("react")


const ReviewForm = props => {
    const [newReview, setNewReview] = useState({
        rating: null,
        comment: ""
    })

    const [reviewFormErrors, setReviewFormErrors] = useState([])

    const submitReview = async (event) => {
        event.preventDefault()
        try {
            const newReviewFormResponse = await fetch("/api/v1/builds", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(newReview)
            })
            if (!newReviewFormResponse.ok) {
                if (newReviewFormResponse.status === 422) {
                    const serverData = await newReviewFormResponse.json()
                    const serverErrors = translateServerErrors(serverData.errors)
                    const cleanedServerErrors = cleanReviewFormErrors(serverErrors)
                    return setReviewFormErrors(cleanedServerErrors)
                }
                else {
                    const errorMessage = `${newReviewFormResponse.status} - ${newReviewFormResponse.statusText}`
                    const error = new Error(errorMessage)
                    throw (error)
                }
            }
            else {
                const body = await response.json()
                const updatedReview = newReview.reviews.concat(body.review)
                setEnchantedForest({...newReview, reviews: updatedReview})
            }
        } catch (error) {
            console.error(`Error in POST: ${error}`)
        }
    }

    if (redirect) {
        return <Redirect push to="/" />
    }

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
            <ErrorList errors={reviewFormErrors} />
            <form onSubmit={submitReview}>
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