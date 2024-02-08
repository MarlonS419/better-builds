import React from "react";
import UserBuildTile from "./BuildTile"
import DeleteBuildButton from "./DeleteBuildButton";

const UserBuildsList = ({ buildsList, currentUserData, setUserData }) => {

    const userBuildTiles = buildsList.map((build) => {
        return (
            <li key={build.id}>
                <UserBuildTile build={build} currentUserData={currentUserData} setUserData={setUserData} />
                <div>
                    <DeleteBuildButton dataToDelete={build.id} currentUserData={currentUserData} setUserData={setUserData} />
                </div>
            </li>
        )
    })

    return (
        <ul>
            {userBuildTiles}
        </ul>
    )
}

export default UserBuildsList