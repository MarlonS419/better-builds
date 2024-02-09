import React, { Fragment } from "react";
import UserBuildsTile from "./UserBuildsTile"

const UserBuildsList = ({ buildsList, currentUserData, setUserData }) => {
    const userBuildTiles = buildsList.map((build) => {
        return (
            <Fragment key={build.id}>
                <UserBuildsTile build={build} currentUserData={currentUserData} setUserData={setUserData} />
            </Fragment>
        )
    })

    return (
        <div>
            {userBuildTiles}
        </div>
    )
}

export default UserBuildsList