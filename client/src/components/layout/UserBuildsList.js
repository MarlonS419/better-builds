import React from "react"
import UserBuildTile from "./BuildTile"

const UserBuildsList = ({ buildsList }) => {

    const userBuildTiles = buildsList.map((build) => {
        return (
            <UserBuildTile key={build.id} build={build} />
        )
    })

    return (
        <ul>
            {userBuildTiles}
        </ul>
    )
}

export default UserBuildsList