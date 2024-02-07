import React, { useState, useEffect } from "react"
import ReviewsList from "./ReviewsList"

const BuildShow = (props) => {
    const [build, setBuild] = useState({ reviews: [] })

    const id = props.match.params.id

    const getBuild = async () => {
        try{
            const response = await fetch(`/api/v1/builds/${id}`)
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
        </>
    )
}

export default BuildShow