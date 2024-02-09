import React, { useState, useEffect } from "react"
import ReviewsList from "./ReviewsList"
import ReviewForm from "./ReviewForm"
import getCurrentUser from "../../services/getCurrentUser"

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
    
    const [currentUser, setCurrentUser] = useState(undefined);
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser()
        setCurrentUser(user)
      } catch(err) {
        setCurrentUser(null)
      }
    }

    useEffect(() => {
        getBuild()
        fetchCurrentUser()
    }, [])

    let reviewForm = null
    if (currentUser) {
        reviewForm =  (<ReviewForm buildId={buildId} build={build} setBuild={setBuild} />)
    }

    return (
        <div>
            <div className="build-show-page">
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
                <ReviewsList reviews={build.reviews}/>
                {reviewForm}
            </div>
        </div>
    )
}

export default BuildShow