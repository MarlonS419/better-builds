import React from "react";
import UserBuildTile from "./BuildTile"
import DeleteButton from "./DeleteButton";

const UserBuildsList = ({ buildsList, currentUserData, setUserData }) => {

    const userBuildTiles = buildsList.map((build) => {
        return (
            <li key={build.id}>
                <div>
                    <UserBuildTile build={build} currentUserData={currentUserData} setUserData={setUserData} />
                    <DeleteButton dataToDelete={build.id} currentUserData={currentUserData} setUserData={setUserData} />
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