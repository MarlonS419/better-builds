import React, { useState, useEffect } from "react"
import ReviewsList from "./ReviewsList"
import ReviewForm from "./ReviewForm"
import translateServerErrors from "../../services/translateServerErrors.js"

const BuildShow = (props) => {
    const [build, setBuild] = useState({ reviews: [] })
    
    const [reviewErrors, setReviewErrors] = useState({})

    const buildId = props.match.params.id

    const getBuild = async () => {
        try{
            const response = await fetch(`/api/v1/builds/${buildId}`)
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setBuild(body.build)
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getBuild()
    }, [])


    const postReview = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`/api/v1/builds/${buildId}/reviews`, {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(newReview)
            })
            console.log("response", response)
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
                
                console.log("Body", body)
                setBuild({...build, reviews: updatedReviewArray})
                // add the review to the existing reviews
                    // existing reviews are at build.reviews



                // setErrors([])
                // setNewReview({...newReview, reviews: updatedReview})
            }
        } catch(error) {
            console.log(error)
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    return (
        <>
            <h3 className="build-show-title" >{build.title}</h3>
            <ul className="build-show-list">
                <li>Case: {build.case}</li>
                <li>GPU: {build.graphicsCard}</li>
                <li>Motherboard: {build.motherboard}</li>
                <li>CPU: {build.processor}</li>
                <li>Ram: {build.ram}</li>
                <li>Storage Type: {build.storageType}</li>
                <li>Storage: {build.storageAmount}gb</li>
                <li>Cooling System: {build.coolingSystem}</li>
                <li>Cooling System Type: {build.coolingSystemType}</li>
            </ul>
            <ReviewsList reviews={build.reviews}/>
            <ReviewForm postReview={postReview} reviewErrors={reviewErrors} setReviewErrors={setReviewErrors} />
        </>
    )
}

export default BuildShow