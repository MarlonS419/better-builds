import React, { Fragment } from "react";
import UserBuildTile from "./BuildTile"
import DeleteButton from "./DeleteButton";

const UserBuildsList = ({currentUserData, setUserData, buildsList}) => {

        const userBuildTiles = buildsList.map((build) => {
            return (
            <Fragment key={build.id}>
                <UserBuildTile build={build} />
                <DeleteButton currentUserData={currentUserData} setUserData={setUserData} dataToDelete={build.id}/>
            </Fragment>
            )    
        })

    return (
        <ul>
            {userBuildTiles}
        </ul>
    )
}

export default UserBuildsList