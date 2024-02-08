import React, { Fragment } from "react";
import UserBuildTile from "./BuildTile"
import DeleteButton from "./DeleteButton";

const UserBuildsList = ({ buildsList }) => {

    const userBuildTiles = buildsList.map((build) => {
        return (
            <UserBuildTile key={build.id} build={build} />
            <DeleteButton />
        )
    })

    return (
        <div>
            {userBuildTiles}
        </div>
    )
}

export default UserBuildsList