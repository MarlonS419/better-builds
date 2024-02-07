import React, { useState, useEffect } from "react"
import BuildTile from "./BuildTile"

const UserBuildList = (props) => {
    const userID = props.user.id
    const [userBuildList, setUserBuildList] = useState([])
    const getUserData = async () => {
        try {
            const getUserBuildList = await fetch(`/api/v1/user/${userID}`)
            const parseBuildList = await getUserBuildList.json()
            setUserBuildList(parseBuildList.buildList)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])



    const userBuilds = userBuildList.map((build) => {
        return <li key={build.id}><BuildTile key={build.id} build={build} /></li>
    })

    return (
        <>
            <h1>My Builds</h1>
            <ul>
                {userBuilds}
            </ul>
        </>
    )
}

export default UserBuildList