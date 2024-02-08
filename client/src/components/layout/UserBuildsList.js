import React from "react"
import UserBuildTile from "./BuildTile"

const UserBuildsList = (props) => {

        const userBuilds = props.buildsList
        const userBuildTiles = userBuilds.map((build) => {
            return <UserBuildTile key={build.id} build={build} />
        })

    return (
        <ul>
            {userBuildTiles}
        </ul>
    )
}

export default UserBuildsList