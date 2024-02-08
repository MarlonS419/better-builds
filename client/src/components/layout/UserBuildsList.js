import React, { Fragment } from "react";
import UserBuildTile from "./BuildTile"

const UserBuildsList = ({ buildsList }) => {
    const userBuildTiles = buildsList.map((build) => {
        return (
            <UserBuildTile key={build.id} build={build} />
        )
    })

    return (
        <div>
            {userBuildTiles}
        </div>
    )
}

export default UserBuildsList