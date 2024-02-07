import React, { useState, useEffect } from "react"
import BuildTile from "./BuildTile"

const BuildsList = (props) => {

    const [currentBuilds, setCurrentBuilds] = useState([])

    const onProfilePage = props.onProfilePage
    let buildTiles
    if(onProfilePage){
        const userBuilds = props.buildsList
        buildTiles = userBuilds.map((build) => {
            return <BuildTile key={build.id} build={build} />
        })
    } else {        
        const getBuilds = async () => {
            try {
                const response = await fetch("/api/v1/builds/")
                const parsedResponse = await response.json()
                setCurrentBuilds(parsedResponse.builds)
            } catch (error) {
                console.error(`Error Fetching Build List: ${error}`)
            }
        }
    
        buildTiles = currentBuilds.map((build) => {
            return (
                <BuildTile key={build.id} build={build} />
            )
        })
    
        useEffect(() => {
            getBuilds()
        }, [])
    }


    return (
        <ul>
            {buildTiles}
        </ul>
    )
}

export default BuildsList