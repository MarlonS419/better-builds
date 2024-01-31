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
            <li key={build.id}><BuildTile key={build.id} build={build} /></li>
        )
    })

    useEffect(() => {
        getBuilds()
    }, [])

    return (
        <ul>
            {buildTitles}
        </ul>
    )
}

export default BuildsList