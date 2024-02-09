import React, { useState, useEffect } from "react"
import ReviewsList from "./ReviewsList"
import ReviewForm from "./ReviewForm"

const BuildShow = (props) => {
    const [build, setBuild] = useState({ reviews: [] })
    
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

    let reviewForm = null
    if (props.user) {
        reviewForm =  (<ReviewForm buildId={buildId} build={build} setBuild={setBuild} />)
    }
    
    return (
        <div className="build-show-page">
            <div className="build-show-title-build">
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
            </div>
            <div className="build-show-reviews">
                {reviewForm}
                <ReviewsList reviews={build.reviews}/>
            </div>
        </div>

    )
}

export default BuildShow