import React, { useState, useEffect } from "react"
import BuildTile from "./BuildTile"
import DeleteButton from "./DeleteButton"

const BuildsList = (props) => {

    const [currentBuilds, setCurrentBuilds] = useState([])

    const onProfilePage = props.onProfilePage
<<<<<<< HEAD
    let buildTiles
    if(onProfilePage){
        setCurrentBuilds(props.buildsList)
        buildTiles = currentBuilds.map((build) => {
            return (
                <>
                    <BuildTile key={build.id} build={build} />
                    <DeleteButton dataToDelete={build.id}/>
                </>
            )
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
=======

    const getBuilds = async () => {
        try {
            const response = await fetch("/api/v1/builds/")
            const parsedResponse = await response.json()
            setCurrentBuilds(parsedResponse.builds)
        } catch (error) {
            console.error(`Error Fetching Build List: ${error}`)
>>>>>>> render-user-reviews
        }
    }

    let buildTiles = currentBuilds.map((build) => {
        return (
            <BuildTile key={build.id} build={build} />
        )
    })

    useEffect(() => {
        getBuilds()
    }, [])


    return (
        <ul>
            {buildTiles}
        </ul>
    )
}

export default BuildsList