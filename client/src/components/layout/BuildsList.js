import React, { useState, useEffect } from "react"
import BuildTile from "./BuildTile"

const BuildsList = (props) => {
    const [currentBuilds, setCurrentBuilds] = useState([])

    const getBuilds = async () => {
        try {
            const response = await fetch("/api/v1/builds/")
            const parsedResponse = await response.json()
            setCurrentBuilds(parsedResponse.builds)
        } catch (error) {
            console.error(`Error Fetching Build List: ${error}`)
        }
    }

    const buildTiles = currentBuilds.map((build) => {
        return (
            <BuildTile key={build.id} build={build} />
        )
    })

    useEffect(() => {
        getBuilds()
    }, [])


    return (
        <div className="main-page">
            <h1>Welcome to Better Builds!</h1>
            <ul className="builds-list-ul">
                {buildTiles}
            </ul>
        </div>
    )
}

export default BuildsList