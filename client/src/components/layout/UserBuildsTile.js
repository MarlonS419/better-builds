import React from "react"
import { Link } from "react-router-dom"
import DeleteBuildButton from "./DeleteBuildButton";
import EditBuildButton from "./EditBuildButton";

const UserBuildTile = ({ build, currentUserData, setUserData }) => {
    const { id, title } = build

    return (
        <li className="build">
            <Link to={`/builds/${id}`}>
                Title: {title}
            </Link>
            <div className="build-buttons">
                <DeleteBuildButton dataToDelete={build.id} currentUserData={currentUserData} setUserData={setUserData} />
                <EditBuildButton dataToEdit={build.id} currentUserData={currentUserData} setUserData={setUserData} />
            </div>
        </li>
    )
}

export default UserBuildTile