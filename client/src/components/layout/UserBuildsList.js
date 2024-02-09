import React, { Fragment } from "react";
import UserBuildTile from "./BuildTile"
import DeleteBuildButton from "./DeleteBuildButton";

const UserBuildsList = ({ buildsList, currentUserData, setUserData }) => {
    const userBuildTiles = buildsList.map((build) => {
        return (
            <Fragment key={build.id}>
                <UserBuildTile build={build} currentUserData={currentUserData} setUserData={setUserData} />
                <DeleteBuildButton dataToDelete={build.id} currentUserData={currentUserData} setUserData={setUserData} />
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