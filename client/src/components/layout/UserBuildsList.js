import React, { useEffect, useState } from "react";
import UserBuildTile from "./BuildTile"

const UserBuildsList = (props) => {

        const userBuilds = props.buildsList
        const userBuildTiles = userBuilds.map((build) => {
            return (
            <>
                <UserBuildTile key={build.id} build={build} />
                <DeleteButton currentUserData={props.currentUserData} setUserData={props.setUserData} dataToDelete={build.id}/>
            </>
            )    
        })

    return (
        <ul>
            {userBuildTiles}
        </ul>
    )
}

export default UserBuildsList