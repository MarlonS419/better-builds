import React from "react"
import { Link } from "react-router-dom"

const UserBuildTile = ({ build, currentUserData, setUserData }) => {
    const { id, title } = build

    return (
        <li>
            <Link to={`/builds/${id}`}>
                Title: {title}
            </Link>
        </li>
    )
}

export default UserBuildTile