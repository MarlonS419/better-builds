import React, { useState, useEffect } from "react"
import ReviewForm from "./ReviewForm"
const BuildShow = (props) => {
    const [build, setBuild] = useState({})
    
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
            setBuild(body.selectedBuild)
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getBuild()
    }, [])


    const submitReview = async (event) => {
        event.preventDefault()
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
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw(error)
                }
            } else {
                const body = await response.json()
                const updatedReview = newReview.reviews.concat(body.review)
                setErrors([])
                setNewReview({...newReview, reviews: updatedReview})
            }
        } catch(error) {
            console.log(error)
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    return (
        <>
            <h3>{build.title}</h3>
            <ul>
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
            <ReviewForm submitReview={submitReview}/>
        </>
    )
}

export default BuildShow