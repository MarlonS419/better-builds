import React from "react"
import { Link } from "react-router-dom"
import DeleteBuildButton from "./DeleteBuildButton";

const UserBuildTile = ({ build, currentUserData, setUserData }) => {
    const { id, title } = build

    return (
        <li>
            <Link to={`/builds/${id}`}>
                Title: {title}
            </Link>
            <DeleteBuildButton dataToDelete={build.id} currentUserData={currentUserData} setUserData={setUserData} />
        </li>
    )
}

export default UserBuildTile