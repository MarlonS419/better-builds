import React, { useState, useEffect } from "react"
import ErrorList from "./ErrorList"
import BuildTile from "./BuildTile"

const BuildsShow = (props) => {
    const [builds, setBuilds] = useState({
        builds: []
    })

    const id = props.match.params.id
    console.log(`this is the build id:`, {id})
    debugger

    const getBuilds = async () => {
        try{
            const response = await fetch(`api/v1/builds/${id}`)
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setBuilds(body.builds)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBuilds()
    }, [])

    const buildTiles = builds.users.map((userObject) => {
        return <BuildTile key={userObject.id} {...userObject} />
    })

    return (
        <div>
            <p>we want this to be a Tile</p>
        </div>
    )
}




export default BuildsShow