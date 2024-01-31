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

    const buildTitles = currentBuilds.map((build) => {
        return (
            <BuildTile key={build.id} build={build} />
        )
    })

    useEffect(() => {
        getBuilds()
    }, [])

    return (
        <div>
            <h4>hello from builds list</h4>
            {buildTitles}
        </div>
    )
}

export default BuildsList